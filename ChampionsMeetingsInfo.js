const ChampionsMeetings = [
	{Name: 'Taurus Cup', 	  JPStartDate: moment('13 May  2021', "DD MMM YYYY").toDate()},
	{Name: 'Gemini Cup', 	  JPStartDate: moment('13 Jun  2021', "DD MMM YYYY").toDate()},
	{Name: 'Cancer Cup', 	  JPStartDate: moment('22 Jul  2021', "DD MMM YYYY").toDate()},
	{Name: 'Leo Cup', 		  JPStartDate: moment('23 Aug  2021', "DD MMM YYYY").toDate()},
	{Name: 'Virgo Cup', 	  JPStartDate: moment('20 Sept 2021', "DD MMM YYYY").toDate()},
	{Name: 'Libra Cup', 	  JPStartDate: moment('21 Oct  2021', "DD MMM YYYY").toDate(), GlobalStartDate: moment('12 Dec  2025', "DD MMM YYYY").toDate()},
	{Name: 'Scorpio Cup', 	  JPStartDate: moment('22 Nov  2021', "DD MMM YYYY").toDate(), GlobalStartDate: moment('01 Jan  2026', "DD MMM YYYY").toDate()},
	{Name: 'Sagittarius Cup', JPStartDate: moment('20 Dec  2021', "DD MMM YYYY").toDate(), GlobalStartDate: moment('23 Jan  2026', "DD MMM YYYY").toDate()},
	{Name: 'Capricorn Cup',   JPStartDate: moment('21 Jan  2022', "DD MMM YYYY").toDate()},
	{Name: 'Aquarius Cup', 	  JPStartDate: moment('17 Feb  2022', "DD MMM YYYY").toDate()},
	{Name: 'Pisces Cup', 	  JPStartDate: moment('21 Mar  2022', "DD MMM YYYY").toDate()},
	{Name: 'Aries Cup', 	  JPStartDate: moment('21 Apr  2022', "DD MMM YYYY").toDate()},
	{Name: 'Taurus Cup', 	  JPStartDate: moment('23 May  2022', "DD MMM YYYY").toDate()},
	{Name: 'Gemini Cup', 	  JPStartDate: moment('13 Jun  2022', "DD MMM YYYY").toDate()},
	{Name: 'Cancer Cup', 	  JPStartDate: moment('13 Jul  2022', "DD MMM YYYY").toDate()},
	{Name: 'Leo Cup', 		  JPStartDate: moment('12 Aug  2022', "DD MMM YYYY").toDate()},
	{Name: 'Virgo Cup', 	  JPStartDate: moment('14 Sept 2022', "DD MMM YYYY").toDate()},
	{Name: 'Libra Cup', 	  JPStartDate: moment('13 Oct  2022', "DD MMM YYYY").toDate()},
	{Name: 'Scorpio Cup', 	  JPStartDate: moment('12 Nov  2022', "DD MMM YYYY").toDate()},
	{Name: 'Sagittarius Cup', JPStartDate: moment('14 Dec  2022', "DD MMM YYYY").toDate()},
	{Name: 'Capricorn Cup',   JPStartDate: moment('13 Jan  2023', "DD MMM YYYY").toDate()},
	{Name: 'Aquarius Cup', 	  JPStartDate: moment('16 Feb  2023', "DD MMM YYYY").toDate()},
	{Name: 'Pisces Cup', 	  JPStartDate: moment('13 Mar  2023', "DD MMM YYYY").toDate()},
	{Name: 'Aries Cup', 	  JPStartDate: moment('12 Apr  2023', "DD MMM YYYY").toDate()},
	{Name: 'MILE', 			  JPStartDate: moment('12 Jun  2023', "DD MMM YYYY").toDate()},
	{Name: 'DIRT', 			  JPStartDate: moment('17 Aug  2023', "DD MMM YYYY").toDate()},
	{Name: 'CLASSIC', 		  JPStartDate: moment('12 Oct  2023', "DD MMM YYYY").toDate()},
	{Name: 'LONG', 			  JPStartDate: moment('13 Dec  2023', "DD MMM YYYY").toDate()},
	{Name: 'SPRINT', 		  JPStartDate: moment('17 Feb  2024', "DD MMM YYYY").toDate()},
	{Name: 'MILE', 			  JPStartDate: moment('12 Apr  2024', "DD MMM YYYY").toDate()},
	
	{Name: 'MILE', 			  JPStartDate: moment('19 Jun  2024', "DD MMM YYYY").toDate()},
	{Name: 'DIRT', 			  JPStartDate: moment('24 Aug  2024', "DD MMM YYYY").toDate()},
	{Name: 'CLASSIC', 		  JPStartDate: moment('22 Oct  2024', "DD MMM YYYY").toDate()},
	{Name: 'LONG', 		  	  JPStartDate: moment('21 Dec  2024', "DD MMM YYYY").toDate()},
	{Name: 'CLASSIC', 		  JPStartDate: moment('23 Jan  2025', "DD MMM YYYY").toDate()},
	{Name: 'MILE', 		  	  JPStartDate: moment('24 Mar  2025', "DD MMM YYYY").toDate()},
	{Name: 'LONG', 		  	  JPStartDate: moment('22 Apr  2025', "DD MMM YYYY").toDate()},

	{Name: 'CLASSIC', 		  JPStartDate: moment('20 Jun  2025', "DD MMM YYYY").toDate()},
	{Name: 'CLASSIC', 		  JPStartDate: moment('24 Jul  2025', "DD MMM YYYY").toDate()},
	{Name: 'CLASSIC', 		  JPStartDate: moment('21 Sept 2025', "DD MMM YYYY").toDate()},
	{Name: 'SPRINT', 		  JPStartDate: moment('22 Oct  2025', "DD MMM YYYY").toDate()},
	{Name: 'MILE', 		  	  JPStartDate: moment('20 Dec  2025', "DD MMM YYYY").toDate()},
	{Name: 'LONG', 		  	  JPStartDate: moment('21 Jan  2026', "DD MMM YYYY").toDate()}
]

/* For simplicity's sake, we won't calculate how many rewards have already been claimed from a CM, so we will only factor in future
events into the savings calcs. To simplify this process, we will use the below variable to mark the first CM that can be used in calcs. */
let StartingCM = 0;
for (let i = 0; i < ChampionsMeetings.length; i++) {

    let CM = ChampionsMeetings[i];

    CM.JPEndDate = DateAdd(CM.JPStartDate, 6);
    
    if (!Object.hasOwn(CM, 'GlobalStartDate')) {
        let JPLaunchCMStartDateDiff = DateDiff(JPLaunchDate, CM.JPStartDate);
        let GlobalLaunchCMStartDateDiff = Math.round(JPLaunchCMStartDateDiff/GlobalAccelRate);

        CM.GlobalStartDate = DateAdd(GlobalLaunchDate, GlobalLaunchCMStartDateDiff);
    };

    CM.GlobalEndDate = DateAdd(CM.GlobalStartDate, 6);
  
    if (StartingCM == 0 && CM.GlobalStartDate > Today) {
        StartingCM = i;
    };
};