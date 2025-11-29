const ChampionsMeetings = [
	{
		Name: 'Taurus Cup',
		JPStartDate: moment('13 May 2021', "DD MMM YYYY").toDate(),
		JPEndDate: moment('19 May 2021', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Gemini Cup',
		JPStartDate: moment('13 Jun 2021', "DD MMM YYYY").toDate(),
		JPEndDate: moment('19 Jun 2021', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Cancer Cup',
		JPStartDate: moment('22 Jul 2021', "DD MMM YYYY").toDate(),
		JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Leo Cup',
		JPStartDate: moment('23 Aug 2021', "DD MMM YYYY").toDate(),
		JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Virgo Cup',
		JPStartDate: moment('20 Sept 2021', "DD MMM YYYY").toDate(),
		JPEndDate: moment('26 Sept 2021', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Libra Cup',
		JPStartDate: moment('21 Oct 2021', "DD MMM YYYY").toDate(),
		JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Scorpio Cup',
		JPStartDate: moment('22 Nov 2021', "DD MMM YYYY").toDate(),
		JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Sagittarius Cup',
		JPStartDate: moment('20 Dec 2021', "DD MMM YYYY").toDate(),
		JPEndDate: moment('26 Dec 2021', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Capricorn Cup',
		JPStartDate: moment('21 Jan 2022', "DD MMM YYYY").toDate(),
		JPEndDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Aquarius Cup',
		JPStartDate: moment('17 Feb 2022', "DD MMM YYYY").toDate(),
		JPEndDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Pisces Cup',
		JPStartDate: moment('21 Mar 2022', "DD MMM YYYY").toDate(),
		JPEndDate: moment('27 Mar 2022', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Aries Cup',
		JPStartDate: moment('21 Apr 2022', "DD MMM YYYY").toDate(),
		JPEndDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Taurus Cup',
		JPStartDate: moment('23 May 2022', "DD MMM YYYY").toDate(),
		JPEndDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Gemini Cup',
		JPStartDate: moment('13 Jun 2022', "DD MMM YYYY").toDate(),
		JPEndDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Cancer Cup',
		JPStartDate: moment('13 Jul 2022', "DD MMM YYYY").toDate(),
		JPEndDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Leo Cup',
		JPStartDate: moment('12 Aug 2022', "DD MMM YYYY").toDate(),
		JPEndDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Virgo Cup',
		JPStartDate: moment('14 Sept 2022', "DD MMM YYYY").toDate(),
		JPEndDate: moment('20 Sept 2022', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Libra Cup',
		JPStartDate: moment('13 Oct 2022', "DD MMM YYYY").toDate(),
		JPEndDate: moment('19 Oct 2022', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Scorpio Cup',
		JPStartDate: moment('12 Nov 2022', "DD MMM YYYY").toDate(),
		JPEndDate: moment('18 Nov 2022', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Sagittarius Cup',
		JPStartDate: moment('14 Dec 2022', "DD MMM YYYY").toDate(),
		JPEndDate: moment('20 Dec 2022', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Capricorn Cup',
		JPStartDate: moment('13 Jan 2023', "DD MMM YYYY").toDate(),
		JPEndDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Aquarius Cup',
		JPStartDate: moment('16 Feb 2023', "DD MMM YYYY").toDate(),
		JPEndDate: moment('22 Feb 2023', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Pisces Cup',
		JPStartDate: moment('13 Mar 2023', "DD MMM YYYY").toDate(),
		JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'Aries Cup',
		JPStartDate: moment('12 Apr 2023', "DD MMM YYYY").toDate(),
		JPEndDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'MILE',
		JPStartDate: moment('12 Jun 2023', "DD MMM YYYY").toDate(),
		JPEndDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'DIRT',
		JPStartDate: moment('17 Aug 2023', "DD MMM YYYY").toDate(),
		JPEndDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'CLASSIC',
		JPStartDate: moment('12 Oct 2023', "DD MMM YYYY").toDate(),
		JPEndDate: moment('18 Oct 2023', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'LONG',
		JPStartDate: moment('13 Dec 2023', "DD MMM YYYY").toDate(),
		JPEndDate: moment('19 Dec 2023', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'SPRINT',
		JPStartDate: moment('17 Feb 2024', "DD MMM YYYY").toDate(),
		JPEndDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
	},
	{
		Name: 'MILE',
		JPStartDate: moment('12 Apr 2024', "DD MMM YYYY").toDate(),
		JPEndDate: moment('18 Apr 2024', "DD MMM YYYY").toDate(),
	},
]

/* For simplicity's sake, we won't calculate how many rewards have already been claimed from a CM, so we will only factor in future
events into the savings calcs. To simplify this process, we will use the below variable to mark the first CM that can be used in calcs. */
let StartingCM = 0;
for (let i = 0; i < ChampionsMeetings.length; i++) {
    let CM = ChampionsMeetings[i];
    
    if (!Object.hasOwn(CM, 'GlobalStartDate')) {
        let JPLaunchCMStartDateDiff = DateDiff(JPLaunchDate, CM.JPStartDate);
        let GlobalLaunchCMStartDateDiff = Math.round(JPLaunchCMStartDateDiff/GlobalAccelRate);

        CM.GlobalStartDate = DateAdd(GlobalLaunchDate, GlobalLaunchCMStartDateDiff);
    };
  
    if (CM.GlobalStartDate > Today) {
        StartingCM = i;
        break;   
    };
};