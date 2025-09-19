const BannerTypes = {
    Uma:   {Value: 1},
    Card:  {Value: 2}
};

const BannersInfo = [
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Haru Urara (New Year)',
        JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'TM Opera O (New Year)',
        JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Tamamo Cross',
        JPStartDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('30 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Fine Motion',
        JPStartDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('21 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Oguri Cap (Christmas)',
        JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Biwa Hayahide (Christmas)',
        JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Mejiro Dober',
        JPStartDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Tosen Jordan',
        JPStartDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('18 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Symboli Rudolf (Festival)',
        JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Gold City (Festival)',
        JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Manhattan Cafe',
        JPStartDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Kawakami Princess',
        JPStartDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Rice Shower (Halloween)',
        JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Super Creek (Halloween)',
        JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Agnes Digital',
        JPStartDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Sept 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Hishi Akebono',
        JPStartDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Sept 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Matikanefukukitaru (Full Armor)',
        JPStartDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Sept 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Eishin Flash',
        JPStartDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Meisho Doto',
        JPStartDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Special Week (Summer)',
        JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Maruzensky (Summer)',
        JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Gold City',
        JPStartDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Fuji Kiseki',
        JPStartDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Jul 2021', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'El Condor Pasa (Fantasy)',
        JPStartDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
        
        GlobalStartDate: moment('21 Sept 2025', "DD MMM YYYY").toDate(),
        GlobalEndDate: moment('4 Oct 2025', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Grass Wonder (Fantasy)',
        JPStartDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),

        GlobalStartDate: moment('21 Sept 2025', "DD MMM YYYY").toDate(),
        GlobalEndDate: moment('4 Oct 2025', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Hishi Amazon',
        JPStartDate: moment('20 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
        
        GlobalStartDate: moment('17 Sept 2025', "DD MMM YYYY").toDate(),
        GlobalEndDate: moment('25 Sept 2025', "DD MMM YYYY").toDate()
    },
    {
        TypeVar: BannerTypes['Uma'].Value,
        Name: 'Seiun Sky',
        JPStartDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('20 Jun 2021', "DD MMM YYYY").toDate(),
        
        GlobalStartDate: moment('7 Sept 2025', "DD MMM YYYY").toDate(),
        GlobalEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate()
    }
];

// Sorting banners chronologically and then alphabetically to make sure that indexes remain constant.
BannersInfo.sort((a, b) => {
  // Primary sort by date (ascending)
  let DateDiff = a.JPStartDate.getTime() - b.JPStartDate.getTime();

  if (DateDiff !== 0) {
    return DateDiff;
  }

  // Secondary sort by name (ascending) if dates are equal
  return a.Name.localeCompare(b.Name);
});