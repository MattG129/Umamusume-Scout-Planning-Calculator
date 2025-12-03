const StoryEventRewardTypes = {
    Carat:        {Value: 1, Label: 'Carats'},
    UmaTicket:    {Value: 2, Label: 'Trainee Scout Ticket'},
    CardTicket:   {Value: 3, Label: 'Support Card Scout Ticket'},
    CrystalShard: {Value: 4, Label: 'Rainbow Crystal Shard'},
}

const StoryEventRewards = [
    {Points: 100000,  RewardType: StoryEventRewardTypes['Carat'],       Quantity: 100},
    {Points: 105000,  RewardType: StoryEventRewardTypes['CardTicket'],   Quantity: 1},
    {Points: 150000,  RewardType: StoryEventRewardTypes['Carat'],       Quantity: 100},
    {Points: 195000,  RewardType: StoryEventRewardTypes['UmaTicket'],    Quantity: 1},
    {Points: 200000,  RewardType: StoryEventRewardTypes['Carat'],       Quantity: 150},
    {Points: 300000,  RewardType: StoryEventRewardTypes['CrystalShard'], Quantity: 1},
    {Points: 310000,  RewardType: StoryEventRewardTypes['Carat'],       Quantity: 150},
    {Points: 460000,  RewardType: StoryEventRewardTypes['Carat'],       Quantity: 200},
    {Points: 520000,  RewardType: StoryEventRewardTypes['CardTicket'],   Quantity: 1},
    {Points: 600000,  RewardType: StoryEventRewardTypes['CrystalShard'], Quantity: 1},
    {Points: 660000,  RewardType: StoryEventRewardTypes['Carat'],       Quantity: 300},
    {Points: 720000,  RewardType: StoryEventRewardTypes['UmaTicket'],    Quantity: 1},
    {Points: 920000,  RewardType: StoryEventRewardTypes['CrystalShard'], Quantity: 1},
    {Points: 1000000, RewardType: StoryEventRewardTypes['Carat'],       Quantity: 500},
    // TODO: Need to think about how this should be added to the dropdown.
    // {Points: 1500000, RewardType: StoryEventRewardTypes['Carat'],       Quantity: 750}
]

const StoryEvents = [
    {
        Name: "Annals!! Golden Holy Night 24 hours",
        JPStartDate: moment('28 Nov 2025', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Oct 2025', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "ACT 0: Adminent, touch, Traffy!",
        JPStartDate: moment('29 Sept 2025', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Oct 2025', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "Story, heart ring",
        JPStartDate: moment('29 Aug 2025', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Sept 2025', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "Summer Days Graffiti (With You)",
        JPStartDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
        JPEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "June's Vibrant Statices",
        JPStartDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
        JPEndDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "Illuminate the Skies, Dreamy Night Parade",
        JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
        JPEndDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "Phantasmagoria: Phantom Step",
        JPStartDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "Melty♡ for U",
        JPStartDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
        JPEndDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "The Painted Dragon Heralds Dawn",
        JPStartDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "Gather and Sing, Stars of the Sky!",
        JPStartDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "Slapstick Crash!",
        JPStartDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "Gazing at the Harvest Moon With You",
        JPStartDate: moment('29 Aug 2024', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "Sunset-Lit Jugend by the Shore",
        JPStartDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
        JPEndDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "A Letter From the Baroque Pearl",
        JPStartDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
        JPEndDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "Uprising: The Soldiers' Battle Cry",
        JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "Dear Comet Orchid: Let's Dance Now!",
        JPStartDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
        JPEndDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
        PointLimit: 1500000
    },
    {
        Name: "Come One, Come All, To Calming Koumian!",
        JPStartDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
        JPEndDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Together with Everyone",
        JPStartDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
        JPEndDate: moment('8 Jan 2024', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "A Gleaming Mejiro Gala",
        JPStartDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "As the Leaves Rust, Feelings Blossom",
        JPStartDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
        JPEndDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "A Patchwork's Farewell",
        JPStartDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Oct 2023', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Summer's Sunlight Fades to Blue",
        JPStartDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
        JPEndDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "#summer #besties",
        JPStartDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "An Oath to My Dear Challengers",
        JPStartDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
        JPEndDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Tagball Rumble: Witty Warfare!",
        JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Wherefore I Adore You",
        JPStartDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Leap Into a New World!",
        JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Mar 2023', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Sweet Memories ♥ Tea Time",
        JPStartDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
        JPEndDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Happy New Future: Bonds Dyed in the Sunrise",
        JPStartDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Illuminate the Heart",
        JPStartDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
        JPEndDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Intertwined Memories, Galloping Thoughts",
        JPStartDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
        JPEndDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Days in a Flash",
        JPStartDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Wings of Iron: Hazy Tales",
        JPStartDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
        JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Super Smashing☆Summer Vacation",
        JPStartDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Seek, Solve, Summer Walk!",
        JPStartDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "The Promised Time: Silks & Three Riddles",
        JPStartDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Roar, Tracen Academy Cheerleading Squad!",
        JPStartDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Tonight at the Ligne Droite",
        JPStartDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Flapping Run-up!",
        JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
        JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Patisserie Grandeur",
        JPStartDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
        JPEndDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Blossoming New Year's Karuta Contest",
        JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Miracles of the Holy Night",
        JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "The Sounds of Autumn",
        JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
        PointLimit: 1000000,

        GlobalStartDate: moment('14 Dec 2025', "DD MMM YYYY").toDate(),
        GlobalEndDate: moment('25 Dec 2025', "DD MMM YYYY").toDate()
    },
    {
        Name: "Make up in Halloween!",
        JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
        PointLimit: 1000000
    },
    {
        Name: "Uma Musume Summer Story",
        JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
        PointLimit: 700000
    },
    {
        Name: "Fantasy World Uma Nest",
        JPStartDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
        PointLimit: 700000
    },
    {
        Name: "Blooming Maiden's June Pride",
        JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
        PointLimit: 700000
    },
    {
        Name: "Brand-new Friend",
        JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
        PointLimit: 700000
    },
    {
        Name: "Chase Your Dreams!",
        JPStartDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('14 Mar 2021', "DD MMM YYYY").toDate(),
        PointLimit: 1450000
    }
].reverse()

/* Since we won't be able to tell how many rewards have already been claimed from an event that
has already started, we will only factor in future events into the savings calcs. To simplify this
process, we will use the below variable to mark the first event that can be used in calcs. */
let StartingEvent = 0;
for (let i = 0; i < StoryEvents.length; i++) {
    let Event = StoryEvents[i];
    
    if (!Object.hasOwn(Event, 'GlobalStartDate')) {
        let JPLaunchEventStartDateDiff = DateDiff(JPLaunchDate, Event.JPStartDate);
        let GlobalLaunchEventStartDateDiff = Math.round(JPLaunchEventStartDateDiff/GlobalAccelRate);

        Event.GlobalStartDate = DateAdd(GlobalLaunchDate, GlobalLaunchEventStartDateDiff);
    };
  
    if (Event.GlobalStartDate > Today) {
        StartingEvent = i;
        break;   
    };
};