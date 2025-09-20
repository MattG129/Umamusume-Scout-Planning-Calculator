// TODO: Add comments.

const Trials = 10**6;

const Today = new Date(); // TODO: Update date/banner calcs to factor in if day/banner has changed between when the page was loaded and when calcs are run.
Today.setHours(0,0,0,0);

const JPLaunchDate = moment('23 Feb 2021', "DD MMM YYYY").toDate()
const GlobalLaunchDate = moment('25 Jun 2025', "DD MMM YYYY").toDate()
const GlobalAccelRate = 1.4;

for (let i = 0; i < BannersInfo.length; i++) {

    if (!Object.hasOwn(BannersInfo[i], 'GlobalStartDate')) {
        let BannerLength = DateDiff(BannersInfo[i].JPStartDate, BannersInfo[i].JPEndDate);
        
        let JPLaunchBannerStartDateDiff = DateDiff(JPLaunchDate, BannersInfo[i].JPStartDate);
        BannersInfo[i].GlobalStartDate = DateAdd(GlobalLaunchDate, Math.round(JPLaunchBannerStartDateDiff/GlobalAccelRate));
        BannersInfo[i].GlobalEndDate = DateAdd(BannersInfo[i].GlobalStartDate, BannerLength);
    }

    BannersInfo[i].BannerLength = DateDiff(BannersInfo[i].GlobalStartDate, BannersInfo[i].GlobalEndDate);
    BannersInfo[i].WeekDiff = Math.floor(DateDiff(Today, BannersInfo[i].GlobalEndDate) / 7);
    BannersInfo[i].MonthDiff = 12*(BannersInfo[i].GlobalEndDate.getFullYear() - Today.getFullYear()) + (BannersInfo[i].GlobalEndDate.getMonth() - Today.getMonth());
};

function DateAdd(date, days) {
    let NewDate = new Date(date);
    
    NewDate.setDate(date.getDate() + days);
    
    return NewDate;
};

function DateDiff(DateFrom, DateTo) {
    return Math.floor((DateTo - DateFrom)/(1000 * 60 * 60 * 24));
};

function DayOfWeek(Date) {
    let DOW = moment(Date).day()
    
    // We want to treat monday as the start of the week and sunday as the end.
    if (DOW == 0) {
        return 7;
    }
    else {
        return DOW;
    };
};

function SavingsCalculator(ScoutConfig, ScoutItemPlan) {
    // Free Carrots are a currency that can be used to acquire new Umas or support cards.
    let FC = ScoutConfig.FC;
    
    // Daily Missions + Daily Carrot Pack (if purchased).
    FC += DateDiff(Today, ScoutItemPlan.GlobalEndDate) * ( 30 + (ScoutConfig.HasDailyCarrotPack ? 50 : 0) );

    // 110 free carrots will be earned from the daily login bonus over the course of a week.
    // TODO: Will have to add a field to specify what day the login bonus gives which rewards, for individual users, since that can affect calcs.
    FC += 110 * ScoutItemPlan.WeekDiff;

    // Team Trials - Provides a reward each week based on your ranking.
    let TeamTrialCarrots = 0;
    switch (ScoutConfig.TeamTrialsClass) {
        case 1: TeamTrialCarrots = 0;   break;
        case 2: TeamTrialCarrots = 25;  break;
        case 3: TeamTrialCarrots = 50;  break;
        case 4: TeamTrialCarrots = 100; break;
        case 5: TeamTrialCarrots = 150; break;
        case 6: TeamTrialCarrots = 250; break;
    };
    FC += TeamTrialCarrots * ( ScoutItemPlan.WeekDiff + (DayOfWeek(Today) > DayOfWeek(ScoutItemPlan.GlobalEndDate) ? 1 : 0) );

    // Club Rewards - Provides a reward each month based on your ranking.
    let ExpectedClubCarrots = 0;
    switch (ScoutConfig.ExpectedClubRank) {
        case 1:  ExpectedClubCarrots = 3000; break;
        case 2:  ExpectedClubCarrots = 2400; break;
        case 3:  ExpectedClubCarrots = 2100; break;
        case 4:  ExpectedClubCarrots = 1800; break;
        case 5:  ExpectedClubCarrots = 1500; break;
        case 6:  ExpectedClubCarrots = 1200; break;
        case 7:  ExpectedClubCarrots = 900;  break;
        case 8:  ExpectedClubCarrots = 600;  break;
        case 9:  ExpectedClubCarrots = 300;  break;
        case 10: ExpectedClubCarrots = 150;  break;
        case 11: ExpectedClubCarrots = 0;    break;
    };
    FC += ExpectedClubCarrots * ScoutItemPlan.MonthDiff;

    // Paid Carrots are a paid currency that can be converted to Free Carrots at a 1:1 rate.
    // They can also be used to make a heavily discounted scout, once per day.
    // For simplicity's sake, the calculator will only allow these to be used on the once daily pull, for the time being.
    let PC = ScoutConfig.PC;

    // A monthly purchase that will reward 500 PC upfront and 50 PC every day for the next 30 days.
    if (ScoutConfig.HasDailyCarrotPack) {
        // TODO: The calculator doesn't factor in when the daily carrot pack is renewed which can mess up the calcs a bit.
        PC += 500 * ScoutItemPlan.MonthDiff;
    };

    return {MaxFCScouts: Math.floor(FC/150), PC: PC};
};

let FCScouts;
let PCSpent;

let UmaTickets;
let CardTickets;

function RunAndEvaluateScoutSimulations(ScoutConfig) {
    const Start = Date.now();
    let Successes = 0;

    let ScoutItemResults = new Array(ScoutConfig.ActiveScoutPlanArray.length).fill(0);    

    let TrialCount;
    for (TrialCount = 0; TrialCount < Trials; TrialCount++) {
        FCScouts = 0;
        PCSpent = 0;
        UmaTickets = ScoutConfig.UmaTickets
        CardTickets = ScoutConfig.CardTickets

        let MissedScoutItems = false;
        let BannerTypesScouted = [];
        for (let i = 0; i < ScoutConfig.ActiveScoutPlanArray.length; i++) {

            let ScoutItemsWon = ScoutSimulator(ScoutConfig, i);

            if (ScoutItemsWon) {
                ScoutItemResults[i]++;
            }
            else {
                MissedScoutItems = true;
            };
        };

        if (MissedScoutItems == false) {
            Successes++
        };

        if (Date.now() - Start > 5000) { // Sets a 5 second time limit on calcs.
            TrialCount += 1
            break;
        };
    };

    for (let i = 0; i < ScoutItemResults.length; i++) {
        ScoutItemResults[i] = ((ScoutItemResults[i] / TrialCount)*100).toFixed(1)+'%';
    };

    return ({
        TotalSuccessRate: ((Successes / TrialCount)*100).toFixed(1)+'%',
        ScoutItemResults: ScoutItemResults
    });
};

function ScoutSimulator(ScoutConfig, ScoutItemNumber) {
    let ScoutItems = 0;

    let Scouts = 0;

    let ScoutItemPlan = ScoutConfig.ActiveScoutPlanArray[ScoutItemNumber];

    let ExchangePoints = ScoutItemPlan.ExchangePoints;

    let MaxFCScouts = ScoutItemPlan.MaxFCScouts - FCScouts
    let MaxPCScouts = Math.min(ScoutItemPlan.BannerLength, Math.floor(ScoutItemPlan.PC - PCSpent)/50)
    let MaxPinkTicketScouts = ScoutItemPlan.Type == BannerTypes.Uma.Value ? UmaTickets : CardTickets;
    let MaxScouts = MaxFCScouts + MaxPCScouts + MaxPinkTicketScouts

    let FiveStarChance = Math.random();
    let NonFiveStarChance = 1;

    while (Scouts < MaxScouts) {
        Scouts++;
        ExchangePoints++;

        NonFiveStarChance *= (1 - 0.0075);

        if (FiveStarChance > NonFiveStarChance) {
            ScoutItems++;

            FiveStarChance = Math.random();
            NonFiveStarChance = 1;
        };

        if (ExchangePoints == 200) {
            ScoutItems++
            ExchangePoints = 0;
        };

        if (ScoutItems >= ScoutItemPlan.Goal) {
            CalcFCScouts(ScoutItemPlan.Type, Scouts, MaxPCScouts, MaxPinkTicketScouts);

            return true;
        };

    };

    CalcFCScouts(ScoutItemPlan.Type, Scouts, MaxPCScouts, MaxPinkTicketScouts);

    return false;
};

// Since we will want to use both paid carrots and pink tickets first, this function will determine how many free carrots were actually used.
function CalcFCScouts(ScoutItemType, Scouts, MaxPCScouts, MaxPinkTicketScouts) {
    let PCScouts = Math.min(Scouts, MaxPCScouts);
    PCSpent += 50 * PCScouts
    
    let PinkTicketScouts = Math.min(Scouts - MaxPCScouts, MaxPinkTicketScouts);
    if (ScoutItemType == BannerTypes.Uma.Value) {
        UmaTickets -= PinkTicketScouts;
    }
    else {
        CardTickets -= PinkTicketScouts;
    };

    FCScouts += (Scouts - PCScouts - PinkTicketScouts);
};

function ScoutPlanningCalculator(ScoutConfig) {

    let SavingsResults;
    let LatestEndDate = '01/01/1970';
    ScoutConfig.ActiveScoutPlanArray = [];
    for (let i = 0; i < ScoutConfig.ScoutPlanArray.length; i++) {    

        let ScoutItemPlan = ScoutConfig.ScoutPlanArray[i];

        if (ScoutItemPlan.Active) {
            
            Object.assign(ScoutItemPlan, BannersInfo[ScoutItemPlan.Banner]);
            
            if (ScoutItemPlan.GlobalEndDate < LatestEndDate) {
                $('#ScoutPlanOrderError').show().html('Scout plan rows must be ordered by end date.');
                return {Success: false};
            }
            else {
                LatestEndDate = ScoutItemPlan.GlobalEndDate;

                let SavingsResults = SavingsCalculator(ScoutConfig, ScoutItemPlan);
                Object.assign(ScoutItemPlan, SavingsResults);
            };

            ScoutConfig.ActiveScoutPlanArray.push(ScoutItemPlan);
        };
    };

    ScoutsResults = RunAndEvaluateScoutSimulations(ScoutConfig);

    $('#ScoutPlanningResultsTable .ScoutPlanResultsRow').remove();

    for (let i = 0; i < ScoutConfig.ActiveScoutPlanArray.length; i++) {

        let ScoutItemPlan = ScoutConfig.ActiveScoutPlanArray[i];
        let BannerEndText = $(`#BannerEnd option[value=${ScoutItemPlan.Banner}]`).text();
        let MaxPCScouts = Math.min(ScoutItemPlan.BannerLength, Math.floor(ScoutItemPlan.PC/50));
        let MaxPinkTicketScouts = ScoutItemPlan.Type == BannerTypes.Uma.Value ? ScoutConfig.UmaTickets : ScoutConfig.CardTickets;

        let NewRow = $(
            `<tr class="ScoutPlanResultsRow">`+
                `<td>${BannerEndText}</td>`+
                `<td>${ScoutItemPlan.Goal}</td>`+
                `<td>${ScoutItemPlan.MaxFCScouts + MaxPCScouts + MaxPinkTicketScouts}</td>`+
                `<td>${ScoutsResults.ScoutItemResults[i]}</td>`+
            `</tr>`
        );

        $('#ScoutPlanningResultsBody').append(NewRow);
    };

    $('#ScoutPlanningResultsTable tfoot').append($(
        `<tr class="ScoutPlanResultsRow">`+
            `<td colspan="5"><b>Chance of reaching all scout goals: ${ScoutsResults.TotalSuccessRate}</b></td>`+
        `</tr>`
    ));

    $('#ScoutPlanningResultsTable').show();

    return {Success: true};
};