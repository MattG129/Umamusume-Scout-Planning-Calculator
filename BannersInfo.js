const BannerTypes = {
    Uma:   {Value: 1},
    Card:  {Value: 2}
};

const BannersInfo = [
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Admire Vega (SSR power) New, 0.75%',
        JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Matikanefukukitaru (SSR speed) New, 0.75%',
        JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Oguri Cap (SSR power) Rerun, 0.75%',
        JPStartDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('30 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Nice Nature (SSR intelligence) Rerun, 0.75%',
        JPStartDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('30 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Inari One (SR power) New, 2.25%',
        JPStartDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('21 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Manhattan Cafe (SSR stamina) New, 0.75%',
        JPStartDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('21 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Mayano Top Gun (SSR speed) New, 0.75%',
        JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Narita Taishin (SSR intelligence) New, 0.75%',
        JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Vodka (SR speed) New, 2.25%',
        JPStartDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Daitaku Helios (SSR power) New, 0.75%',
        JPStartDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'El Condor Pasa (SSR power) Rerun, 0.7501%',
        JPStartDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('18 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Kitasan Black (SSR speed) Rerun, 0.7501%',
        JPStartDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('18 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Curren Chan (SSR intelligence) New, 0.75%',
        JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Narita Brian (SSR stamina) New, 0.75%',
        JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Sirius Symboli (SR guts) New, 2.25%',
        JPStartDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Nakayama Festa (SSR stamina) New, 0.75%',
        JPStartDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Seiun Sky (SSR stamina) Rerun, 0.75%',
        JPStartDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Yaeno Muteki (SSR power) Rerun, 0.75%',
        JPStartDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Tamamo Cross (SSR power) New, 0.75%',
        JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Zenno Rob Roy (SSR speed) New, 0.75%',
        JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Fine Motion (SR power) New, 2.25%',
        JPStartDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Sept 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Ikuno Dictus (SSR guts) New, 0.75%',
        JPStartDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Sept 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Sakura Bakushin O (SSR speed) Rerun, 0.7501%',
        JPStartDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Sept 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Biko Pegasus (SSR speed) Rerun, 0.75%',
        JPStartDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Sept 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Rice Shower (SSR power) New, 0.75%',
        JPStartDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Sept 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Riko Kashimoto (SSR friend) New, 0.75%',
        JPStartDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Sept 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Tosen Jordan (SR stamina) New, 2.25%',
        JPStartDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Nice Nature (SSR intelligence) New, 0.75%',
        JPStartDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Special Week (SSR guts) Rerun, 0.7501%',
        JPStartDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Tokai Teio (SSR speed) Rerun, 0.7501%',
        JPStartDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Sweep Tosho (SSR speed) New, 0.75%',
        JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Winning Ticket (SSR stamina) New, 0.75%',
        JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Vodka (SSR power) Rerun, 0.7501%',
        JPStartDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Nishino Flower (SSR speed) Rerun, 0.75%',
        JPStartDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Mejiro Ardan (SR intelligence) New, 2.25%',
        JPStartDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Jul 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Mejiro Ryan (SSR guts) New, 0.75%',
        JPStartDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Jul 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Seiun Sky (SSR intelligence) New, 0.75%',
        JPStartDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('11 Jul 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'King Halo (SSR power) New, 0.75%',
        JPStartDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('11 Jul 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Shinko Windy (SR speed) New, 2.25%',
        JPStartDate: moment('20 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Jun 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Bamboo Memory (SSR power) New, 0.75%',
        JPStartDate: moment('20 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Jun 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Silence Suzuka (SSR speed) Rerun, 0.7501%',
        JPStartDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('20 Jun 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Tamamo Cross (SSR stamina) Rerun, 0.7501%',
        JPStartDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('20 Jun 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Kawakami Princess (SSR speed) New, 0.75%',
        JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Hishi Akebono (SSR guts) New, 0.75%',
        JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Seeking the Pearl (SR guts) New, 2.25%',
        JPStartDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('27 May 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Sakura Chiyono O (SSR stamina) New, 0.75%',
        JPStartDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('27 May 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Super Creek (SSR stamina) Rerun, 0.75%',
        JPStartDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('16 May 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Tazuna Hayakawa (SSR friend) Rerun, 0.75%',
        JPStartDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('16 May 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Zenno Rob Roy (SR stamina) New, 2.25%',
        JPStartDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('5 May 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Yaeno Muteki (SSR power) New, 0.75%',
        JPStartDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('5 May 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Nishino Flower (SR power) New, 2.25%',
        JPStartDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('25 Apr 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Yukino Bijin (SSR intelligence) New, 0.75%',
        JPStartDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('25 Apr 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Kitasan Black (SSR speed) New, 0.5%',
        JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Satono Diamond (SSR stamina) New, 0.5%',
        JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Ikuno Dictus (SR intelligence) New, 2.25%',
        JPStartDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('29 Mar 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Mejiro Palmer (SSR guts) New, 0.75%',
        JPStartDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('29 Mar 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Daitaku Helios (SR power) New, 2.25%',
        JPStartDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('17 Mar 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Twin Turbo (SSR speed) New, 0.75%',
        JPStartDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('17 Mar 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Sweep Tosho (SR speed) New, 2.25%',
        JPStartDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('8 Mar 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Card'].Value,
        Name: 'Oguri Cap (SSR power) New, 0.75%',
        JPStartDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('8 Mar 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Haru Urara (New Year)',
        JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'TM Opera O (New Year)',
        JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Tamamo Cross',
        JPStartDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('30 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Fine Motion',
        JPStartDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('21 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Oguri Cap (Christmas)',
        JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Biwa Hayahide (Christmas)',
        JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Mejiro Dober',
        JPStartDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Tosen Jordan',
        JPStartDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('18 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Symboli Rudolf (Festival)',
        JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Gold City (Festival)',
        JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Manhattan Cafe',
        JPStartDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Kawakami Princess',
        JPStartDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Rice Shower (Halloween)',
        JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Super Creek (Halloween)',
        JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Agnes Digital',
        JPStartDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Sept 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Hishi Akebono',
        JPStartDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Sept 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Matikanefukukitaru (Full Armor)',
        JPStartDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('9 Sept 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Eishin Flash',
        JPStartDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Meisho Doto',
        JPStartDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Special Week (Summer)',
        JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Maruzensky (Summer)',
        JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Gold City',
        JPStartDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Fuji Kiseki',
        JPStartDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('19 Jul 2021', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'El Condor Pasa (Fantasy)',
        JPStartDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
        
        GlobalStartDate: moment('21 Sept 2025', "DD MMM YYYY").toDate(),
        GlobalEndDate: moment('4 Oct 2025', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Grass Wonder (Fantasy)',
        JPStartDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),

        GlobalStartDate: moment('21 Sept 2025', "DD MMM YYYY").toDate(),
        GlobalEndDate: moment('4 Oct 2025', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
        Name: 'Hishi Amazon',
        JPStartDate: moment('20 Jun 2021', "DD MMM YYYY").toDate(),
        JPEndDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
        
        GlobalStartDate: moment('17 Sept 2025', "DD MMM YYYY").toDate(),
        GlobalEndDate: moment('25 Sept 2025', "DD MMM YYYY").toDate()
    },
    {
        Type: BannerTypes['Uma'].Value,
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