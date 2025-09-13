// TODO: Add comments.

// let BannerInfo = [];
let TargetBannerInfo;
const Trials = 10**6;

const Today = new Date(); // TODO: Update date/banner calcs to factor in if day/banner has changed between when the page was loaded and when calcs are run.
Today.setHours(0,0,0,0);

const BannerTypes = {
    Uma:   {Value: 1},
    Card:  {Value: 2}
};

const JPLaunchDate = moment('23 Feb 2021', "DD MMM YYYY").toDate()
const GlobalLaunchDate = moment('25 Jun 2025', "DD MMM YYYY").toDate()
const GlobalAccelRate = 1.4;

let GlobalBanners = [];
for (let i = 0; i < JPBanners.length; i++) {

    let GlobalBannerStartDate;
    let GlobalBannerEndDate;

    if (Object.hasOwn(GlobalDateOverrides, i)) {
        GlobalBannerStartDate = moment(GlobalDateOverrides[i].StartDate, "DD MMM YYYY").toDate();
        GlobalBannerEndDate = moment(GlobalDateOverrides[i].EndDate, "DD MMM YYYY").toDate();
    }
    else {
        let BannerLength = DateDiff(JPBanners[i].StartDate, JPBanners[i].EndDate);
        
        let JPLaunchBannerStartDateDiff = DateDiff(JPLaunchDate, JPBanners[i].StartDate);
        GlobalBannerStartDate = DateAdd(GlobalLaunchDate, Math.round(JPLaunchBannerStartDateDiff/GlobalAccelRate));
        GlobalBannerEndDate = DateAdd(GlobalBannerStartDate, BannerLength);
    }

    GlobalBanners.push({
        Type: BannerTypes[JPBanners[i].TypeVar].value,
        Name: JPBanners[i].Name,
        StartDate: GlobalBannerStartDate,
        EndDate: GlobalBannerEndDate,
        BannerLength: DateDiff(GlobalBannerStartDate, GlobalBannerEndDate),
        WeekDiff: Math.floor(DateDiff(Today, GlobalBannerEndDate) / 7),
        MonthDiff: 12*(GlobalBannerEndDate.getFullYear() - Today.getFullYear()) + (GlobalBannerEndDate.getMonth() - Today.getMonth())
    })
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

// let Patch = 50; // Using ints to make things easier.
// let PatchDiff = 0; // This will track how many patches are between the current patch and any subsequent patches.
// let PatchStartDate = v5StartDate;
// let CurrentBannerVal;
// while (BannerInfo.length < 50) {
//     for (let Phase = 1; Phase <= 2; Phase++) {
//         let BannerEndDate = DateAdd(PatchStartDate, 21*Phase);

//         if (BannerEndDate >= Today && CurrentBannerVal == undefined) {
//             CurrentBannerVal = BannerInfo.length;
//         };

//         // BannerInfo will start with 5.0 phase 1, rather than the current patch, as it needs to have consistent values because of the import.
//         BannerInfo.push({
//             'Patch': (Patch/10).toFixed(1),
//             'PatchDiff': PatchDiff,
//             'PatchStartDate': PatchStartDate,
//             'Phase': Phase,
//             'PhaseDiff': BannerInfo.length - CurrentBannerVal,
//             'BannerEndDate': BannerEndDate,
//             'MonthDiff': 12*(BannerEndDate.getFullYear() - Today.getFullYear()) + (BannerEndDate.getMonth() - Today.getMonth())
//         });
//     };
// };

function SavingsCalculator(WishConfig) {
    // FC are a currency used to purchase intertwinded fates, which will be used to make wishes.
    // Genesis Crystals are a paid currency that can be converted to Primogems at a 1:1 rate.
    let FC = WishConfig.FC;

    // 40 FC from character trials, every banner. Assumes that this banner's trial FC have already been claimed.
    // FC += 40*(TargetBannerInfo.PhaseDiff);
    
    // Daily Missions
    FC += DateDiff(Today, TargetBannerInfo.EndDate) * ( 30 + (WishConfig.HasDailyCarrotPack ? 50 : 0) );

    // 110 free carrots will be earned from the daily login bonus over the course of a week.
    // TODO: Will have to add a field to specify what day the login bonus gives which rewards, for individual users, since that can affect calcs.
    // Will also have to update the calcs to 
    FC += 110 * TargetBannerInfo.WeekDiff;

    // Team Trials
    let TeamTrialCarrots = 0;
    switch (WishConfig.ExpectedAct) {
        case 1: TeamTrialCarrots = 0;   break;
        case 2: TeamTrialCarrots = 25;  break;
        case 3: TeamTrialCarrots = 50;  break;
        case 4: TeamTrialCarrots = 100; break;
        case 5: TeamTrialCarrots = 150; break;
        case 6: TeamTrialCarrots = 250; break;
    };
    FC += TeamTrialCarrots * ( TargetBannerInfo.WeekDiff + (DayOfWeek(Today) > DayOfWeek(TargetBannerInfo.EndDate) ? 1 : 0) );

    // Club Rewards
    let ExpectedClubCarrots = 0;
    switch (WishConfig.ExpectedAct) {
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
    FC += ExpectedClubCarrots * TargetBannerInfo.MonthDiff;

    let PC = WishConfig.PC;
    if (WishConfig.HasDailyCarrotPack) {
        // TODO: The calculator doesn't factor in when the daily carrot pack is renewed which can mess up the calcs a bit.
        PC += 500 * TargetBannerInfo.MonthDiff;
    };

    return {MaxFCScouts: Math.floor(FC/150), PC: PC};
};

// Declaring variables outside the function scope so they can be used by both NumericWishCalculations and the wish sim functions.
let Wishes;
let PCSpent;
let LostCharacter5050s; // When pulling on the character banner, if you get a five-star without an event item guarantee, you will have a 50:50 chance for it to be your desired five-star.
let CapturingRadiancePity; // Explained in a tool tip.

// Pity: Builds up as you make wishes and once it reaches a certain amount it will increase your chances of getting a five-star. Once you get a five-star it will reset to 0.

// Rate: Chance of getting a five-star on the next pull.

// Fate points: You will get one fate point everytime you pull a five-star that isn't your current target. 
// Once you reach the maximum amount of fate points, your next five-star is guaranteed to be your desired one.
// Pulling your desired five-star will reset your fate points to 0.

// let ScoutPity;
let EventCharacterGuarantee;
let CharacterRate;

let WeaponPity;
let EventWeaponGuarantee;
let WeaponFatePoints;
let WeaponRate;

let ChronicledPity;
let ChronicledFatePoints;
let ChronicledRate;

let UmaTickets;
let CardTickets;

function NumericWishCalculations(WishConfig) {
    const Start = Date.now();
    let Successes = 0;

    let WishPlanResults = new Array(WishConfig.EnabledWishPlanArray.length).fill(0);    

    let TrialCount;
    for (TrialCount = 0; TrialCount < Trials; TrialCount++) {
        Wishes = 0;
        PCSpent = 0;
        // LostCharacter5050s = 0;

        // ScoutPity = WishConfig.CharacterPity;
        // EventCharacterGuarantee = WishConfig.EventCharacterGuarantee;
        ScoutRate = 0.0075;
        // CapturingRadiancePity = WishConfig.CapturingRadiancePity;

        // WeaponPity = WishConfig.WeaponPity;
        // EventWeaponGuarantee = WishConfig.EventWeaponGuarantee;
        // WeaponFatePoints = WishConfig.WeaponFatePoints;
        // WeaponRate = BannerTypes.Weapon.BaseFiveStarRate + Math.max(0, BannerTypes.Weapon.SoftPityIncrement*(WeaponPity-BannerTypes.Weapon.SoftPityThreshold));

        // ChronicledPity = WishConfig.ChronicledPity;
        // ChronicledFatePoints = WishConfig.ChronicledFatePoints;
        // ChronicledRate = BannerTypes.ChronicledWish.BaseFiveStarRate + Math.max(0, BannerTypes.ChronicledWish.SoftPityIncrement*(ChronicledPity-BannerTypes.ChronicledWish.SoftPityThreshold));

        // if (WishConfig.WishMode != WishModes.Advanced.value) {
        //     let CharactersWon = CharacterWishSim(WishConfig, WishConfig.CharacterGoal, WishConfig.MaxWishes);

        //     let WeaponsWon = WeaponWishSim(WishConfig, WishConfig.WeaponGoal, WishConfig.MaxWishes);

        //     let ChronicledItemsWon = ChronicledWishSim(WishConfig, WishConfig.ChronicledGoal, WishConfig.MaxWishes);

        //     if (CharactersWon && WeaponsWon && ChronicledItemsWon) {
        //         Successes++;
        //     };
        // }
        // else {
        let MissedScoutItems = false;
        let BannerTypesScouted = [];
        for (let i = 0; i < WishConfig.EnabledWishPlanArray.length; i++) {
            UmaTickets = WishConfig.UmaTickets
            CardTickets = WishConfig.CardTickets

            // let WishGroupMaxWishes = WishConfig.EnabledWishPlanArray[i].WishPlanMaxWishes;
            
            // if ( !BannerTypesScouted.Includes(WishConfig.EnabledWishPlanArray[i].WishPlanType) ) {
            //     WishGroupMaxWishes = WishConfig.EnabledWishPlanArray[i].WishPlanMaxWishes;

            //     if (WishConfig.EnabledWishPlanArray[i].WishPlanType == BannerTypes['Uma'].Value) {
            //         ScoutPity = WishConfig.UmaPity;
            //     }
            //     else {
            //         ScoutPity = WishConfig.CardPity;
            //     }
                
            //     // WeaponFatePoints = 0;
            //     // ChronicledFatePoints = 0;
            // }
            // else {
            //     ScoutPity = 0;
            // };

            let WishItemsWon;
            // switch (WishConfig.EnabledWishPlanArray[i].WishPlanType) {
            //     case BannerTypes.Character.value:
            WishItemsWon = CharacterWishSim(WishConfig, i);
                    // break;
            //     case BannerTypes.Weapon.value: 
            //         WishItemsWon = WeaponWishSim(WishConfig, WishConfig.EnabledWishPlanArray[i].WishPlanGoal, WishGroupMaxWishes);
            //         break;
            //     case BannerTypes.ChronicledWish.value: 
            //         WishItemsWon = ChronicledWishSim(WishConfig, WishConfig.EnabledWishPlanArray[i].WishPlanGoal, WishGroupMaxWishes);
            //         break;
            // };

            if (WishItemsWon) {
                WishPlanResults[i]++;
            }
            else {
                MissedScoutItems = true;
            };
        };

        if (MissedScoutItems == false) {
            Successes++
        };
        // };

        if (Date.now() - Start > 5000) { // Sets a 5 second time limit on wish calcs.
            TrialCount += 1
            break;
        };
    };

    for (let i = 0; i < WishPlanResults.length; i++) {
        WishPlanResults[i] = ((WishPlanResults[i] / TrialCount)*100).toFixed(1)+'%';
    };

    return ({
        TotalSuccessRate: ((Successes / TrialCount)*100).toFixed(1)+'%',
        WishPlanResults: WishPlanResults
    });
};

function CharacterWishSim(WishConfig, WishPlanItemNumber) {
    let ScoutItems = 0;

    let Scouts = 0;

    let ScoutItemPlan = WishConfig.EnabledWishPlanArray[WishPlanItemNumber];

    let ExchangePoints = ScoutItemPlan.ExchangePoints;
    let Goal = ScoutItemPlan.WishPlanGoal;
    
    let MaxPCScouts = Min(ScoutItemPlan.BannerLength, Math.floor(ScoutItemPlan.PC - PCSpent)/50)
    let MaxPinkTicketScouts = ScoutItemPlan.Type == BannerTypes.Uma.Value ? UmaTickets : CardTickets;
    let MaxScouts = ScoutItemPlan.MaxFCScouts + MaxPCScouts + MaxPinkTicketScouts

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

        if (ScoutItems >= CharacterGoal) {
            CalcFCScouts(ScoutItemPlan.Type, Scouts, MaxPCScouts);

            return true;
        };

    };

    CalcFCScouts(ScoutItemPlan.Type, Scouts, MaxPCScouts);

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

    FCScouts -= (Scouts - PCScouts - PinkTicketScouts)
};

function WishCalcs(WishConfig) {
    
    // let ixMaxWishes;
    let LatestStartDate = '01/01/1970';
    WishConfig.EnabledWishPlanArray = [];
    for (let i = 0; i < WishConfig.WishPlanArray.length; i++) {    

        let ScoutItemPlan = WishConfig.WishPlanArray[i];
        let TargetBannerInfo = GlobalBanners[ScoutItemPlan.WishPlanBannerEnd];
        
        if (ScoutItemPlan.WishPlanEnabled) {
            
            if (TargetBannerInfo.StartDate >= LatestStartDate) {

                LatestStartDate = TargetBannerInfo.StartDate;
                let SavingsResults = SavingsCalculator(WishConfig);

                ScoutItemPlan.MaxFCScouts = SavingsResults.MaxFCScouts
                ScoutItemPlan.PC = SavingsResults.PC
            }
            else if (ScoutItemPlan.WishPlanBannerEnd == LatestStartDate) {
                ScoutItemPlan.WishPlanMaxWishes = ixMaxWishes
            }
            else {
                $('#WishError').show().html('Banner end dates must be in ascending order.');
                return {Success: false};
            };

            WishConfig.EnabledWishPlanArray.push(ScoutItemPlan);
        };
    };

    WishResults = NumericWishCalculations(WishConfig);

    $('#WishPlanningResultsTable .WishPlanResultsRow').remove();

    for (let i = 0; i < WishConfig.EnabledWishPlanArray.length; i++) {
        let BannerEndVal = WishConfig.EnabledWishPlanArray[i].WishPlanBannerEnd;
        let BannerEndText = $(`#BannerEnd option[value=${BannerEndVal}]`).text();

        let NewRow = $(
            `<tr class="WishPlanResultsRow">`+
                `<td>${BannerEndText}</td>`+
                `<td>${WishConfig.EnabledWishPlanArray[i].WishPlanGoal}</td>`+
                `<td>${WishConfig.EnabledWishPlanArray[i].WishPlanMaxWishes}</td>`+
                `<td>${WishResults.WishPlanResults[i]}</td>`+
            `</tr>`
        );

        $('#WishPlanningResultsBody').append(NewRow);
    };

    $('#WishPlanningResultsTable tfoot').append($(
        `<tr class="WishPlanResultsRow">`+
            `<td colspan="5"><b>Chance of reaching all wish goals: ${WishResults.TotalSuccessRate}</b></td>`+
        `</tr>`
    ));

    $('#WishPlanningResultsTable').show();

    return {Success: true};
};