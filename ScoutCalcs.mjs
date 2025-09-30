const Trials = 10**6;

const Today = new Date(); // TODO: Update date/banner calcs to factor in if day/banner has changed between when the page was loaded and when calcs are run.
Today.setHours(0,0,0,0);

const JPLaunchDate = moment('23 Feb 2021', "DD MMM YYYY").toDate()
const GlobalLaunchDate = moment('25 Jun 2025', "DD MMM YYYY").toDate()
const GlobalAccelRate = 1.4;

let CurrentBannerID = 0;
let CurrentBannerItems = [];

for (let i = 0; i < ItemsInfo.length; i++) {
    if (!Object.hasOwn(ItemsInfo[i], 'GlobalStartDate')) {
        let BannerLength = DateDiff(ItemsInfo[i].JPStartDate, ItemsInfo[i].JPEndDate);
        
        let JPLaunchBannerStartDateDiff = DateDiff(JPLaunchDate, ItemsInfo[i].JPStartDate);
        let GlobalLaunchBannerStartDateDiff = Math.round(JPLaunchBannerStartDateDiff/GlobalAccelRate);
        ItemsInfo[i].GlobalStartDate = DateAdd(GlobalLaunchDate, GlobalLaunchBannerStartDateDiff);
        ItemsInfo[i].GlobalEndDate = DateAdd(ItemsInfo[i].GlobalStartDate, BannerLength);
    };

    ItemsInfo[i].BannerLength = DateDiff(ItemsInfo[i].GlobalStartDate, ItemsInfo[i].GlobalEndDate);
    ItemsInfo[i].WeekDiff = Math.floor(DateDiff(Today, ItemsInfo[i].GlobalEndDate) / 7);
    ItemsInfo[i].MonthDiff = 12*(ItemsInfo[i].GlobalEndDate.getFullYear() - Today.getFullYear()) + (ItemsInfo[i].GlobalEndDate.getMonth() - Today.getMonth());

    CurrentBannerID = ItemsInfo[i].BannerID;
    if (ItemsInfo[i].Disabled != true) {
        CurrentBannerItems.push(i);
    };

    if (i + 1 >= ItemsInfo.length || CurrentBannerID != ItemsInfo[i+1].BannerID) {
        
        let BannerName;
        if (Object.hasOwn(BannerNames, CurrentBannerID)) {
            BannerName = BannerNames[CurrentBannerID];
        }
        else {
            let First = true;
            let GenericName = '';
            let CurrentItemSuffix;
            let PreviousItemSuffix;
            let ConsistentSuffix = true;

            for (let j = 0; j < CurrentBannerItems.length; j++) {

                let Open = ItemsInfo[CurrentBannerItems[j]].Name.indexOf('(');
                let Close = ItemsInfo[CurrentBannerItems[j]].Name.indexOf(')');
                if (Open != Close) {
                    CurrentItemSuffix = ItemsInfo[CurrentBannerItems[j]].Name.substring(Open+1, Close) // +1 Gets rid of parenthesis.
                };

                if (First) {
                    GenericName += ItemsInfo[CurrentBannerItems[j]].Name
                }
                else {
                    if (CurrentItemSuffix != PreviousItemSuffix) {
                        ConsistentSuffix = false;
                    };

                    GenericName += `<br>${ItemsInfo[CurrentBannerItems[j]].Name}`;
                };

                First = false;
                PreviousItemSuffix = CurrentItemSuffix;
            };

            if (
                ConsistentSuffix
                && CurrentItemSuffix
                && CurrentItemSuffix.substring(0, 2) != 'SR'
                && CurrentItemSuffix.substring(0, 3) != 'SSR'
                && CurrentBannerItems.length > 1
            ) {
                BannerName = CurrentItemSuffix;
            }
            else {
                BannerName = GenericName;
            }


        };

        BannerNames[CurrentBannerID] = `${BannerName}<br>
            ${moment(ItemsInfo[i].GlobalStartDate, "YYYY-MM-DD").format('L')} - ${moment(ItemsInfo[i].GlobalEndDate, "YYYY-MM-DD").format('L')}`

        CurrentBannerItems = [];
    };
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
    
    // We want to treat Monday as the start of the week and Sunday as the end.
    return (DOW == 0 ? 7 : DOW);
};

function CalculateRoundRewards(ScoutConfig, Round) {
    /* CM Rewards will be given out based on how many races were won out of five, for a given set. Since the amount of rewards per win increases at a
    non-linear rate, and for simplicity's sake, we will estimate the results using max and min wins per set. The max wins per set will represent a rate that
    would be just above the win rate. Similar for the min wins per set. (ex: If our win rate is 30 then our max is 2 and min is 1 as 2/5 -> 40% and 1/5 -> 20%.) */
    MaxWinsPerFinish = 1;
    while (ScoutConfig[`CMR${Round}WR`] > 20*MaxWinsPerFinish) {
        MaxWinsPerFinish += 1
    };
    MinWinsPerFinish = MaxWinsPerFinish - 1;

    // We will now try and approximate the win rate using our max, min, and the number of sets run.
    let MaxWinSets = ScoutConfig[`CMR${Round}Sets`]
    let MinWinSets = ScoutConfig[`CMR${Round}Sets`] - MaxWinSets;
    while ( 20 * ( (MaxWinsPerFinish*MaxWinSets + MinWinsPerFinish*MinWinSets) / ScoutConfig[`CMR${Round}Sets`] ) > ScoutConfig[`CMR${Round}WR`] ) {
        MaxWinSets -= 1
        MinWinSets += 1
    };

    // League: 1 = Open, 2 = Graded
    // Group: 1 = A, 2 = B
    let Rewards;
    if (ScoutConfig.CMLeague == 1 && Round == 1) {
        Rewards = [5, 10, 15, 20, 25, 30];
    }
    else if (ScoutConfig.CMLeague == 1 && Round == 2 && ScoutConfig.CMR2Group == 1) {
        Rewards = [15, 20, 30, 40, 50, 100];
    }
    else if (ScoutConfig.CMLeague == 1 && Round == 2 && ScoutConfig.CMR2Group == 2) {
        Rewards = [10, 15, 20, 30, 40, 50];
    }
    else if (ScoutConfig.CMLeague == 2 && Round == 1) {
        Rewards = [10, 15, 20, 30, 40, 50];
    }
    else if (ScoutConfig.CMLeague == 2 && Round == 2 && ScoutConfig.CMR2Group == 1) {
        Rewards = [20, 30, 40, 50, 75, 150];
    }
    else if (ScoutConfig.CMLeague == 2 && Round == 2 && ScoutConfig.CMR2Group == 2) {
        Rewards = [15, 20, 30, 40, 50, 100];
    };

    return MaxWinSets*Rewards[MaxWinsPerFinish] + MinWinSets*Rewards[MinWinsPerFinish];
};

function SavingsCalculator(ScoutConfig, BannerPlan) {
    // Free Carats are a currency that can be used to acquire new Umamusumes (Umas) or support cards, in a process called scouting.
    let FC = ScoutConfig.FC;

    // Uma/Card tickets, collectively referred to as pink tickets, can be used to make scouts on their corresponding types of banners.
    let UmaTickets = ScoutConfig.UmaTickets;
    let CardTickets = ScoutConfig.CardTickets;
    
    // Daily Missions + Daily Carat Pack (if purchased).
    FC += DateDiff(Today, BannerPlan.GlobalEndDate) * ( 75 + (ScoutConfig.HasDailyCaratPack ? 50 : 0) );

    // 150 free carats will be earned from the daily login bonus over the course of a week.
    // TODO: Will have to add a field to specify what day the login bonus gives which rewards, for individual users, since that can affect calcs.
    FC += 150 * BannerPlan.WeekDiff;

    // Team Trials - Provides a reward each week based on your class.
    let TeamTrialCarats = 0;
    switch (ScoutConfig.TeamTrialsClass) {
        case 1: TeamTrialCarats = 0;   break;
        case 2: TeamTrialCarats = 35;  break;
        case 3: TeamTrialCarats = 75;  break;
        case 4: TeamTrialCarats = 150; break;
        case 5: TeamTrialCarats = 225; break;
        case 6: TeamTrialCarats = 375; break;
    };
    FC += TeamTrialCarats * ( BannerPlan.WeekDiff + (DayOfWeek(Today) > DayOfWeek(BannerPlan.GlobalEndDate) ? 1 : 0) );

    // Each month there will be an event that gives out carats and pink tickets for completing stories, bingo cards, and reaching certain event point milestones.

    /* Since we don't have exact dates for when the events will occur on, we can't just use month diff. Instead we will use the month diff to tell us
    how many months will have ended between now and the target banner's end date and assume that the rewards would be given out at the very end of 
    the month. We won't however, give out rewards for the month that the banner ends on, even if it ends on the last day of the month, in order to avoid any
    potential edge case issues with time zones and what not. */
    let NumberOfEvents = Math.max(0, BannerPlan.MonthDiff - (ScoutConfig.CurrentMonthsEventCompleted ? 1 : 0));

    if (ScoutConfig.CompletesEventStories) {
        FC += NumberOfEvents * 210
    };

    if (ScoutConfig.CompletesEventBingoCards) {
        FC += NumberOfEvents * 450
    };

    if (ScoutConfig.ExpectedEventPoints >= 1) {FC          += NumberOfEvents * 100};
    if (ScoutConfig.ExpectedEventPoints >= 2) {CardTickets += NumberOfEvents * 1};
    if (ScoutConfig.ExpectedEventPoints >= 3) {FC          += NumberOfEvents * 100};
    if (ScoutConfig.ExpectedEventPoints >= 4) {UmaTickets  += NumberOfEvents * 1};
    if (ScoutConfig.ExpectedEventPoints >= 5) {FC          += NumberOfEvents * 100};
    if (ScoutConfig.ExpectedEventPoints >= 6) {CardTickets += NumberOfEvents * 1};
    if (ScoutConfig.ExpectedEventPoints >= 7) {FC          += NumberOfEvents * 150};
    if (ScoutConfig.ExpectedEventPoints >= 8) {UmaTickets  += NumberOfEvents * 1};
    if (ScoutConfig.ExpectedEventPoints >= 9) {FC          += NumberOfEvents * 150};

    /* Champion meets are recurring tournaments that give out rewards based on how well you perform. Since there have only been two CMs as of
    the time of writing this, it would be difficult to come up with accurate estimates for future dates. As such, we will simplify things by
    having the calculator assume 1 CM per month. We will calculate the NumberOfCMs similarly to how NumberOfEvents is calculated. */
    let NumberOfCMs = Math.max(0, BannerPlan.MonthDiff - (ScoutConfig.CurrentMonthsCMCompleted ? 1 : 0));

    FC += NumberOfCMs * CalculateRoundRewards(ScoutConfig, 1);
    FC += NumberOfCMs * CalculateRoundRewards(ScoutConfig, 2);

    // You can run up to 8 sets per round. The first 6 are free, but the last 2 will cost 30 FC each.
    FC -= NumberOfCMs * 30 * Math.max(0, ScoutConfig.CMR1Sets - 6);
    FC -= NumberOfCMs * 30 * Math.max(0, ScoutConfig.CMR2Sets - 6);

    // We don't need to run the function for round 3 since its just one race. Round 3 will also award pink tickets.
    // League: 1 = Open, 2 = Graded
    // Group: 1 = A, 2 = B
    if (ScoutConfig.CMLeague == 1 && ScoutConfig.CMR3Group == 1) {
        
        UmaTickets  += NumberOfCMs * [3, 2, 1][ScoutConfig.CMR3Placement-1];
        CardTickets += NumberOfCMs * [3, 2, 1][ScoutConfig.CMR3Placement-1];
        FC          += NumberOfCMs * [900, 700, 500][ScoutConfig.CMR3Placement-1];
    }
    else if (ScoutConfig.CMLeague == 1 && ScoutConfig.CMR3Group == 2) {
        
        UmaTickets  += NumberOfCMs * [2, 2, 1][ScoutConfig.CMR3Placement-1];
        CardTickets += NumberOfCMs * [1, 0, 0][ScoutConfig.CMR3Placement-1];
        FC          += NumberOfCMs * [500, 300, 200][ScoutConfig.CMR3Placement-1];
    }
    else if (ScoutConfig.CMLeague == 2 && ScoutConfig.CMR3Group == 1) {

        UmaTickets  += NumberOfCMs * [5, 4, 3][ScoutConfig.CMR3Placement-1];
        CardTickets += NumberOfCMs * [5, 4, 3][ScoutConfig.CMR3Placement-1];
        FC          += NumberOfCMs * [2000, 1500, 1000][ScoutConfig.CMR3Placement-1];
    }
    else if (ScoutConfig.CMLeague == 2 && ScoutConfig.CMR3Group == 2) {
        UmaTickets  += NumberOfCMs * [3, 2, 1][ScoutConfig.CMR3Placement-1];
        CardTickets += NumberOfCMs * [3, 2, 1][ScoutConfig.CMR3Placement-1];
        FC          += NumberOfCMs * [1000, 750, 500][ScoutConfig.CMR3Placement-1];
    };

    // Club Rewards - Provides a reward each month based on your ranking.
    let ExpectedClubCarats = 0;
    switch (ScoutConfig.ExpectedClubRank) {
        case 1:  ExpectedClubCarats = 3000; break;
        case 2:  ExpectedClubCarats = 2400; break;
        case 3:  ExpectedClubCarats = 2100; break;
        case 4:  ExpectedClubCarats = 1800; break;
        case 5:  ExpectedClubCarats = 1500; break;
        case 6:  ExpectedClubCarats = 1200; break;
        case 7:  ExpectedClubCarats = 900;  break;
        case 8:  ExpectedClubCarats = 600;  break;
        case 9:  ExpectedClubCarats = 300;  break;
        case 10: ExpectedClubCarats = 150;  break;
        case 11: ExpectedClubCarats = 0;    break;
    };
    FC += ExpectedClubCarats * BannerPlan.MonthDiff;

    /* When a new Uma comes out, you will be able to view the first 4 chapters of there story,
    even if you haven't pulled them, and will receive 80 FC for doing so. */
    for (let i = 0; i < ItemsInfo.length; i++) {
        if (
            ItemsInfo[i].GlobalStartDate > Today
            && ItemsInfo[i].GlobalStartDate <= BannerPlan.GlobalEndDate
            && ItemsInfo[i].IsNew
            && ItemsInfo[i].Type == BannerTypes['Uma'].Value
            && ItemsInfo[i].Name.at(-1) != ')' // Hacky way of making sure this isn't an alternate version of an Uma that's already been released.
        ) {                    
            FC += 80
        }
    };

    /* Paid Carats are a paid currency that can be converted to Free Carats at a 1:1 rate. They can also be used to make a heavily discounted
    scout (50 PC), once per day. For simplicity's sake, the calculator will currently only allow these to be used on the once daily scout. */
    // Note that the MaxPCScouts does not factor in how many pulls could be made given the banner's duration, but instead focuses on how many PC scouts could possibly be made all together by it's end date.
    let MaxPCScouts = Math.floor(ScoutConfig.PC/50);


    // A monthly purchase that will reward 500 PC (10 scouts) upfront and 50 FC every day for the next 30 days.
    if (ScoutConfig.HasDailyCaratPack && BannerPlan.GlobalEndDate >= moment(ScoutConfig.NextCaratPackRenewalDate)) {

        let RenewalToEndDateDiff = DateDiff(moment(ScoutConfig.NextCaratPackRenewalDate), BannerPlan.GlobalEndDate);

        /* We will add 10 PC scouts for every renewal date between the next renewal date and the banner's end date, except for the last renewal date between the two.
        For the last one, we need to check how many of the pulls could actually be used by the banner's end date. */
        MaxPCScouts += 10 * Math.floor(RenewalToEndDateDiff/30) + Math.min(10, RenewalToEndDateDiff % 30 + 1);
    };

    return {
        MaxFCScouts: Math.floor(FC/150),
        MaxPCScouts: MaxPCScouts,
        MaxPinkTicketScouts: BannerPlan.Type == BannerTypes.Uma.Value ? UmaTickets : CardTickets
    };
};

let TotalFCScouts;
let TotalPCScouts;

let UmaTicketsSpent;
let CardTicketsSpent;

function RunAndEvaluateScoutSimulations(ScoutConfig) {
    const Start = Date.now();
    let Successes = 0;
    let ScoutItemResults = new Array(ScoutConfig.ActiveScoutTargets).fill(0);

    let TrialCount;
    for (TrialCount = 0; TrialCount < Trials; TrialCount++) {
        TotalFCScouts = 0;
        TotalPCScouts = 0;
        UmaTicketsSpent = 0;
        CardTicketsSpent = 0;

        let ScoutItemNumber = 0;
        let MissedScoutItems = false;
        for (let i = 0; i < ScoutConfig.ActiveScoutPlanArray.length; i++) {
            let SimulationResults = ScoutSimulator(ScoutConfig, ScoutConfig.ActiveScoutPlanArray[i]);

            for (let j = 0; j < SimulationResults.length; j++) {
                if (SimulationResults[j] > 0) {
                    MissedScoutItems = true;
                }
                else {
                    ScoutItemResults[ScoutItemNumber]++;
                };

                ScoutItemNumber++;
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

function ScoutSimulator(ScoutConfig, BannerPlan) {
    let ScoutGoals = [];
    let ScoutItemsRemaining = 0;
    let TargetRates = [];
    let SumOfTargetRates = 0;
    for (let i = 0; i < BannerPlan.Items.length; i++) {
        let Item = BannerPlan.Items[i];

        ScoutGoals.push(Item.Goal);
        ScoutItemsRemaining += Item.Goal;

        TargetRates.push(ItemsInfo[Item.ID].Rate);
        SumOfTargetRates += ItemsInfo[Item.ID].Rate;
    };

    let Scouts = 0;
    let ExchangePoints = BannerPlan.ExchangePoints;

    let MaxFCScouts = BannerPlan.MaxFCScouts - TotalFCScouts;
    let MaxPCScouts = Math.min( DateDiff(Today, BannerPlan.GlobalEndDate), BannerPlan.BannerLength + 1, BannerPlan.MaxPCScouts - TotalPCScouts );
    let MaxPinkTicketScouts = BannerPlan.MaxPinkTicketScouts - (BannerPlan.Type == BannerTypes.Uma.Value ? UmaTicketsSpent : CardTicketsSpent);
    let MaxScouts = MaxFCScouts + MaxPCScouts + MaxPinkTicketScouts;

    let FiveStarChance = Math.random();
    let NonFiveStarChance = 1;

    while (Scouts < MaxScouts) {
        Scouts++;
        ExchangePoints++;

        NonFiveStarChance *= (1 - SumOfTargetRates);

        if (FiveStarChance > NonFiveStarChance) {
            let CumulativeItemChance = 0;
            let ScoutRandomizer = Math.random() * SumOfTargetRates;

            for (let i = 0; i < ScoutGoals.length; i++) {
                CumulativeItemChance += TargetRates[i];

                if (ScoutRandomizer < CumulativeItemChance) {
                    if (ScoutGoals[i] > 0) {
                        ScoutGoals[i] -= 1;
                        ScoutItemsRemaining -= 1;
                    };
                    break;
                };
            };

            FiveStarChance = Math.random();
            NonFiveStarChance = 1;
        };

        if (ScoutItemsRemaining - Math.floor(ExchangePoints/200) <= 0) {
            break;
        };
    };

    for (let i = 0; i < ScoutGoals.length; i++) {
        while (ScoutGoals[i] > 0 && ExchangePoints >= 200) {
            ScoutGoals[i] -= 1;
            ExchangePoints -= 200;
        };
    };

    CalcFCScouts(BannerPlan.Type, Scouts, MaxPCScouts, MaxPinkTicketScouts);

    return ScoutGoals;
};

// Since we will want to use both paid carats and pink tickets first, this function will determine how many free carats were actually used.
function CalcFCScouts(ScoutItemType, Scouts, MaxPCScouts, MaxPinkTicketScouts) {
    let PCScouts = Math.min(Scouts, MaxPCScouts);
    TotalPCScouts += PCScouts;

    let PinkTicketScouts = Math.min(Scouts - PCScouts, MaxPinkTicketScouts);
    if (ScoutItemType == BannerTypes.Uma.Value) {
        UmaTicketsSpent += PinkTicketScouts;
    }
    else {
        CardTicketsSpent += PinkTicketScouts;
    };

    TotalFCScouts += (Scouts - PCScouts - PinkTicketScouts);
};

function ScoutPlanningCalculator(ScoutConfig) {
    ScoutConfig.ActiveScoutTargets = 0;
    ScoutConfig.ActiveScoutPlanArray = [];

    for (let i = 0; i < ScoutConfig.ScoutPlanArray.length; i++) {
        if (ScoutConfig.ScoutPlanArray[i].Active) {
            ScoutConfig.ActiveScoutTargets++;

            let Banner = ItemsInfo[ScoutConfig.ScoutPlanArray[i].Banner];
            let PreviousScoutPlanEntry = ScoutConfig.ActiveScoutPlanArray[ScoutConfig.ActiveScoutPlanArray.length-1];

            if (i > 0 && Banner.BannerID == PreviousScoutPlanEntry.BannerID) {
                PreviousScoutPlanEntry.Items.push({ID: ScoutConfig.ScoutPlanArray[i].Banner,  Goal: ScoutConfig.ScoutPlanArray[i].Goal});
            }
            else {
                let BannerPlan = ScoutConfig.ScoutPlanArray[i];

                BannerPlan.Items = [{ID: ScoutConfig.ScoutPlanArray[i].Banner,  Goal: ScoutConfig.ScoutPlanArray[i].Goal}];

                Object.assign(BannerPlan, Banner);

                let SavingsResults = SavingsCalculator(ScoutConfig, BannerPlan);
                Object.assign(BannerPlan, SavingsResults);
                
                ScoutConfig.ActiveScoutPlanArray.push(BannerPlan);
            };
        };
    };

    ScoutsResults = RunAndEvaluateScoutSimulations(ScoutConfig);

    $('#ScoutPlanningResultsTable .ScoutPlanResultsRow').remove();

    let PCScouts = 0;
    let UmaTicketScouts = 0;
    let CardTicketScouts = 0;
    let FCScouts = 0;

    let ScoutItemNumber = 0;

    for (let i = 0; i < ScoutConfig.ActiveScoutPlanArray.length; i++) {
        let BannerPlan = ScoutConfig.ActiveScoutPlanArray[i];

        let First = true;
        let MaxScouts;
        for (let j = 0; j < BannerPlan.Items.length; j++) {
            
            let Item = BannerPlan.Items[j];
            let BannerText;
            let MaxPCScouts = Math.min( DateDiff(Today, BannerPlan.GlobalEndDate), BannerPlan.BannerLength + 1, BannerPlan.MaxPCScouts - PCScouts );

            if (First) {
                BannerText = `${ItemsInfo[Item.ID].Name}<br>${moment(ItemsInfo[Item.ID].GlobalStartDate, "YYYY-MM-DD").format('L')} - ${moment(ItemsInfo[Item.ID].GlobalEndDate, "YYYY-MM-DD").format('L')}`

                MaxScouts = MaxPCScouts;
                MaxScouts += BannerPlan.MaxPinkTicketScouts - (BannerPlan.Type == BannerTypes.Uma.Value ? UmaTicketScouts : CardTicketScouts);
                MaxScouts += BannerPlan.MaxFCScouts - FCScouts;
            }
            else {
                BannerText = ItemsInfo[Item.ID].Name;
            }

            let ThisItemPCScouts = 0;
            for (let k = 0; k < Item.Goal; k++) {
                if (MaxPCScouts > ThisItemPCScouts) {
                    ThisItemPCScouts += 1;
                }
                else if (BannerPlan.Type == BannerTypes.Uma.Value && BannerPlan.MaxPinkTicketScouts > UmaTicketScouts) {
                    UmaTicketScouts += 1;
                }
                else if (BannerPlan.Type == BannerTypes.Card.Value && BannerPlan.MaxPinkTicketScouts > CardTicketScouts) {
                    CardTicketScouts += 1;
                }
                else if (BannerPlan.MaxFCScouts > FCScouts) {
                    FCScouts += 1;
                };
            };
            PCScouts += ThisItemPCScouts;

            // Won't display max scouts for 2nd+ item(s) in group since its repeat info and not showing it can be used as a visual indicator of groups.
            let NewRow = $(
                `<tr class="ScoutPlanResultsRow">
                    <td>${BannerText}</td>
                    <td>${Item.Goal}</td>
                    <td>${First ? MaxScouts : ''}</td>
                    <td>${ScoutsResults.ScoutItemResults[ScoutItemNumber]}</td>
                </tr>`
            );

            $('#ScoutPlanningResultsBody').append(NewRow);

            ScoutItemNumber++;
            First = false;
        };
    };

    $('#ScoutPlanningResultsTable tfoot').append($(
        `<tr class="ScoutPlanResultsRow">
            <td colspan="5"><b>Chance of reaching all scout goals: ${ScoutsResults.TotalSuccessRate}</b></td>
        </tr>`
    ));

    $('#ScoutPlanningResultsTable').show();

    return {Success: true};
};