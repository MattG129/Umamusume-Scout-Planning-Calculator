const BannerTypes = {
    Uma:   {Value: 1},
    Card:  {Value: 2}
};

const BannersInfo = [
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Believe',
    GroupID: 370,
    JPStartDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Biko Pegasus (SR intelligence)',
    GroupID: 369,
    JPStartDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiichi Ruby (SSR guts)',
    GroupID: 369,
    JPStartDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Espoir City',
    GroupID: 368,
    JPStartDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Calstone Light O (SSR speed)',
    GroupID: 365,
    JPStartDate: moment('28 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Durandal (SSR intelligence)',
    GroupID: 365,
    JPStartDate: moment('28 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'K.S.Miracle (Alt Version)',
    GroupID: 364,
    JPStartDate: moment('28 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Miracle (Alt Version)',
    GroupID: 364,
    JPStartDate: moment('28 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Stay Gold (SSR guts)',
    GroupID: 363,
    JPStartDate: moment('23 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Admire Groove (SSR speed)',
    GroupID: 363,
    JPStartDate: moment('23 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Still in Love',
    GroupID: 362,
    JPStartDate: moment('23 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Vivlos (Summer)',
    GroupID: 360,
    JPStartDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Win Variation (SSR intelligence)',
    GroupID: 357,
    JPStartDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Duramente (SSR stamina)',
    GroupID: 357,
    JPStartDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Crown (Summer)',
    GroupID: 356,
    JPStartDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Cheval Grand (Summer)',
    GroupID: 356,
    JPStartDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fusaichi Pandora',
    GroupID: 354,
    JPStartDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kawakami Princess (SR guts)',
    GroupID: 353,
    JPStartDate: moment('10 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ryan (SSR stamina)',
    GroupID: 353,
    JPStartDate: moment('10 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Ines Fujin (Deserted Island)',
    GroupID: 352,
    JPStartDate: moment('10 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tamamo Cross (SSR power)',
    GroupID: 349,
    JPStartDate: moment('26 Jun 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tucker Bryne (SSR friend)',
    GroupID: 349,
    JPStartDate: moment('26 Jun 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City (Deserted Island)',
    GroupID: 348,
    JPStartDate: moment('26 Jun 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Chrono Genesis',
    GroupID: 346,
    JPStartDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Rhein Kraft (SSR speed)',
    GroupID: 343,
    JPStartDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daring Heart (SSR intelligence)',
    GroupID: 343,
    JPStartDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ramonu (Wedding)',
    GroupID: 342,
    JPStartDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Cesario (Wedding)',
    GroupID: 342,
    JPStartDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Loves Only You',
    GroupID: 340,
    JPStartDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Bouquetd\'or (SR stamina)',
    GroupID: 337,
    JPStartDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Silence Suzuka (SSR guts)',
    GroupID: 337,
    JPStartDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Verxina',
    GroupID: 336,
    JPStartDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gray Week',
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.001765,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Transcend (SSR guts)',
    GroupID: 331,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Buena Vista (SSR power)',
    GroupID: 331,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Copano Rickey (Parade)',
    GroupID: 330,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Smart Falcon (Parade)',
    GroupID: 330,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fenomeno',
    GroupID: 328,
    JPStartDate: moment('20 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'No Reason',
    GroupID: 338,
    JPStartDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daring Heart (SR power)',
    GroupID: 327,
    JPStartDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daring Tact (SSR intelligence)',
    GroupID: 327,
    JPStartDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sirius Symboli (The Twinkle Legends)',
    GroupID: 326,
    JPStartDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vodka (SSR power)',
    GroupID: 323,
    JPStartDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Dream Journey (SSR speed)',
    GroupID: 323,
    JPStartDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tap Dance City (Ballroom)',
    GroupID: 322,
    JPStartDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tanino Gimlet (Ballroom)',
    GroupID: 322,
    JPStartDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'No Reason',
    GroupID: 320,
    JPStartDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Rice Shower (SR speed)',
    GroupID: 319,
    JPStartDate: moment('10 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Bright (SSR stamina)',
    GroupID: 319,
    JPStartDate: moment('10 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gran Alegria',
    GroupID: 318,
    JPStartDate: moment('10 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Lucky Lilac (SR intelligence)',
    GroupID: 315,
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.015,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro McQueen (SR guts)',
    GroupID: 315,
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.015,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Embodiment of Legends (SSR group)',
    GroupID: 315,
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Almond Eye (SSR speed)',
    GroupID: 315,
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Orfevre',
    GroupID: 314,
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tsurumaru Tsuyoshi',
    GroupID: 312,
    JPStartDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Chan (SSR guts)',
    GroupID: 309,
    JPStartDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SSR intelligence)',
    GroupID: 309,
    JPStartDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Aston Machan (Valentine)',
    GroupID: 308,
    JPStartDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yamanin Zephyr (Valentine)',
    GroupID: 308,
    JPStartDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Furioso',
    GroupID: 306,
    JPStartDate: moment('19 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ramonu (SR stamina)',
    GroupID: 305,
    JPStartDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seeking the Pearl (SSR speed)',
    GroupID: 305,
    JPStartDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Maruzensky (New Year)',
    GroupID: 304,
    JPStartDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Rudolf (SSR intelligence)',
    GroupID: 301,
    JPStartDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ardan (SSR power)',
    GroupID: 301,
    JPStartDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Katsuragi Ace (New Year)',
    GroupID: 300,
    JPStartDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mr. C.B. (New Year)',
    GroupID: 300,
    JPStartDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Grass Wonder (New Year)',
    GroupID: 298,
    JPStartDate: moment('18 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Bubble Gum Fellow (SR speed)',
    GroupID: 297,
    JPStartDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Blast Onepiece (SSR guts)',
    GroupID: 297,
    JPStartDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Win Variation',
    GroupID: 296,
    JPStartDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Digital (SSR intelligence)',
    GroupID: 293,
    JPStartDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Meisho Doto (SSR speed)',
    GroupID: 293,
    JPStartDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Top Road (Christmas)',
    GroupID: 292,
    JPStartDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Admire Vega (Christmas)',
    GroupID: 292,
    JPStartDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Air Messiah',
    GroupID: 290,
    JPStartDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'North Flight (SR power)',
    GroupID: 289,
    JPStartDate: moment('7 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Kris S (SSR power)',
    GroupID: 289,
    JPStartDate: moment('7 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Taishin (Mecha)',
    GroupID: 288,
    JPStartDate: moment('7 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Shakur (SSR stamina)',
    GroupID: 285,
    JPStartDate: moment('28 Oct 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiwa Scarlet (SSR intelligence)',
    GroupID: 285,
    JPStartDate: moment('28 Oct 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide (Mecha)',
    GroupID: 284,
    JPStartDate: moment('28 Oct 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Bubble Gum Fellow',
    GroupID: 282,
    JPStartDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Amazon (SSR guts)',
    GroupID: 279,
    JPStartDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Brian (SSR speed)',
    GroupID: 279,
    JPStartDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seeking the Pearl (Halloween)',
    GroupID: 278,
    JPStartDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mayano Top Gun (Halloween)',
    GroupID: 278,
    JPStartDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Durandal',
    GroupID: 276,
    JPStartDate: moment('19 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Laurel (SR intelligence)',
    GroupID: 275,
    JPStartDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Espoir City (SSR power)',
    GroupID: 275,
    JPStartDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Cesario',
    GroupID: 274,
    JPStartDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Taiki Shuttle (SSR intelligence)',
    GroupID: 271,
    JPStartDate: moment('29 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fuji Kiseki (SSR guts)',
    GroupID: 271,
    JPStartDate: moment('29 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Neo Universe (Autumn)',
    GroupID: 270,
    JPStartDate: moment('29 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Zenno Rob Roy (Autumn)',
    GroupID: 270,
    JPStartDate: moment('29 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Marvelous Sunday (SR guts)',
    GroupID: 269,
    JPStartDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Still in Love (SSR speed)',
    GroupID: 269,
    JPStartDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gentildonna',
    GroupID: 268,
    JPStartDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Palmer (SR stamina)',
    GroupID: 265,
    JPStartDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fine Motion (SSR guts)',
    GroupID: 265,
    JPStartDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Smart Falcon (SSR speed)',
    GroupID: 261,
    JPStartDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Copano Rickey (SSR intelligence)',
    GroupID: 261,
    JPStartDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Eishin Flash (Summer Trip)',
    GroupID: 260,
    JPStartDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hokko Tarumae (Summer Trip)',
    GroupID: 260,
    JPStartDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Calstone Light O',
    GroupID: 258,
    JPStartDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanefukukitaru (SR speed)',
    GroupID: 257,
    JPStartDate: moment('8 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Dantsu Flame (SSR stamina)',
    GroupID: 257,
    JPStartDate: moment('8 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rice Shower (Great Food Festival)',
    GroupID: 256,
    JPStartDate: moment('8 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yayoi Akikawa (SSR friend)',
    GroupID: 253,
    JPStartDate: moment('25 Jun 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SSR power)',
    GroupID: 253,
    JPStartDate: moment('25 Jun 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Dream Journey',
    GroupID: 252,
    JPStartDate: moment('25 Jun 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Jungle Pocket',
    GroupID: 250,
    JPStartDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('25 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vivlos (SSR speed)',
    GroupID: 247,
    JPStartDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seiun Sky (SSR power)',
    GroupID: 247,
    JPStartDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'King Halo (Wedding)',
    GroupID: 246,
    JPStartDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sweep Tosho (Wedding)',
    GroupID: 246,
    JPStartDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'North Flight',
    GroupID: 244,
    JPStartDate: moment('19 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Dantsu Flame (SR intelligence)',
    GroupID: 243,
    JPStartDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vodka (SSR guts)',
    GroupID: 243,
    JPStartDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Agnes Tachyon (Alt Version)',
    GroupID: 242,
    JPStartDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gochi Week',
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.006,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Miracle (SSR stamina)',
    GroupID: 237,
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Taishin (SSR intelligence)',
    GroupID: 237,
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Super Creek (Warfare)',
    GroupID: 236,
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yaeno Muteki (Warfare)',
    GroupID: 236,
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sounds of Earth',
    GroupID: 234,
    JPStartDate: moment('18 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Shakur (SR power)',
    GroupID: 233,
    JPStartDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Neo Universe (SSR intelligence)',
    GroupID: 233,
    JPStartDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Winning Ticket (U.A.F.)',
    GroupID: 232,
    JPStartDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SSR power)',
    GroupID: 229,
    JPStartDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yamanin Zephyr (SSR speed)',
    GroupID: 229,
    JPStartDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daiichi Ruby (Ballroom)',
    GroupID: 228,
    JPStartDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daitaku Helios (Ballroom)',
    GroupID: 228,
    JPStartDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tap Dance City (SR guts)',
    GroupID: 227,
    JPStartDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Cheval Grand (SSR stamina)',
    GroupID: 227,
    JPStartDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rhein Kraft',
    GroupID: 226,
    JPStartDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Transcend',
    GroupID: 224,
    JPStartDate: moment('11 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tosen Jordan (SR speed)',
    GroupID: 223,
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.015,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yaeno Muteki (SR stamina)',
    GroupID: 223,
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.015,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Orfevre (SSR guts)',
    GroupID: 223,
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ryoka Tsurugi (SSR friend)',
    GroupID: 223,
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Ikuno Dictus',
    GroupID: 222,
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Duramente',
    GroupID: 222,
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biko Pegasus',
    GroupID: 220,
    JPStartDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Winning Ticket (SSR power)',
    GroupID: 219,
    JPStartDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Bakushin O (SSR speed)',
    GroupID: 219,
    JPStartDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yukino Bijin (Valentine)',
    GroupID: 218,
    JPStartDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Manhattan Cafe (Valentine)',
    GroupID: 218,
    JPStartDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tanino Gimlet (SR intelligence)',
    GroupID: 217,
    JPStartDate: moment('18 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hokko Tarumae (SSR stamina)',
    GroupID: 217,
    JPStartDate: moment('18 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Vivlos',
    GroupID: 216,
    JPStartDate: moment('18 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nice Nature (New Year)',
    GroupID: 214,
    JPStartDate: moment('8 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Duramente (SSR speed)',
    GroupID: 213,
    JPStartDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Satono Diamond (SSR intelligence)',
    GroupID: 213,
    JPStartDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kitasan Black (Anime Collab)',
    GroupID: 212,
    JPStartDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Royce and Royce (SR power)',
    GroupID: 211,
    JPStartDate: moment('19 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vivlos (SSR guts)',
    GroupID: 211,
    JPStartDate: moment('19 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Cheval Grand',
    GroupID: 210,
    JPStartDate: moment('19 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Crown',
    GroupID: 208,
    JPStartDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Dober (SSR speed)',
    GroupID: 207,
    JPStartDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ramonu (SSR power)',
    GroupID: 207,
    JPStartDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Palmer (Christmas)',
    GroupID: 206,
    JPStartDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Bright (Christmas)',
    GroupID: 206,
    JPStartDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Verxina (SR guts)',
    GroupID: 205,
    JPStartDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sounds of Earth (SSR stamina)',
    GroupID: 205,
    JPStartDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tap Dance City',
    GroupID: 204,
    JPStartDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanetannhauser (SR speed)',
    GroupID: 203,
    JPStartDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro McQueen (SSR intelligence)',
    GroupID: 203,
    JPStartDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tsurumaru Tsuyoshi (SSR power)',
    GroupID: 201,
    JPStartDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'King Halo (SSR guts)',
    GroupID: 201,
    JPStartDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kawakami Princess (Festival)',
    GroupID: 200,
    JPStartDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tokai Teio (Festival)',
    GroupID: 200,
    JPStartDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nice Nature (SR stamina)',
    GroupID: 199,
    JPStartDate: moment('18 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Gold Ship (SSR speed)',
    GroupID: 199,
    JPStartDate: moment('18 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ramonu',
    GroupID: 198,
    JPStartDate: moment('18 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tanino Gimlet (SSR stamina)',
    GroupID: 195,
    JPStartDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tap Dance City (SSR guts)',
    GroupID: 195,
    JPStartDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Air Shakur (Halloween)',
    GroupID: 194,
    JPStartDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Symboli Kris S (Halloween)',
    GroupID: 194,
    JPStartDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Taiki Shuttle (SR intelligence)',
    GroupID: 193,
    JPStartDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Amazon (SSR power)',
    GroupID: 193,
    JPStartDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'K.S.Miracle',
    GroupID: 192,
    JPStartDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Special Week (SSR stamina)',
    GroupID: 191,
    JPStartDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro McQueen (SSR stamina)',
    GroupID: 191,
    JPStartDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Diamond (Project L\'Arc)',
    GroupID: 190,
    JPStartDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kitasan Black (SR stamina)',
    GroupID: 189,
    JPStartDate: moment('30 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nakayama Festa (SSR intelligence)',
    GroupID: 189,
    JPStartDate: moment('30 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold Ship (Project L\'Arc)',
    GroupID: 188,
    JPStartDate: moment('30 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mei Satake (SSR friend)',
    GroupID: 187,
    JPStartDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'El Condor Pasa (SSR speed)',
    GroupID: 187,
    JPStartDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Top Road',
    GroupID: 186,
    JPStartDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SSR speed)',
    GroupID: 185,
    JPStartDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ramonu (SSR intelligence)',
    GroupID: 185,
    JPStartDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Copano Rickey',
    GroupID: 184,
    JPStartDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hokko Tarumae',
    GroupID: 184,
    JPStartDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Manhattan Cafe (SSR intelligence)',
    GroupID: 183,
    JPStartDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Jungle Pocket (SSR guts)',
    GroupID: 183,
    JPStartDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Agnes Tachyon (Summer)',
    GroupID: 182,
    JPStartDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Silence Suzuka (Summer)',
    GroupID: 182,
    JPStartDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Grass Wonder (SR power)',
    GroupID: 181,
    JPStartDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Wonder Acute (SSR power)',
    GroupID: 181,
    JPStartDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sirius Symboli',
    GroupID: 180,
    JPStartDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Twin Turbo (SSR guts)',
    GroupID: 179,
    JPStartDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiichi Ruby (SSR power)',
    GroupID: 179,
    JPStartDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Katsuragi Ace',
    GroupID: 178,
    JPStartDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Gold City (SSR guts)',
    GroupID: 177,
    JPStartDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Palmer (SSR speed)',
    GroupID: 177,
    JPStartDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Bamboo Memory (Summer Trip)',
    GroupID: 176,
    JPStartDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tosen Jordan (Summer Trip)',
    GroupID: 176,
    JPStartDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Copano Rickey (SR guts)',
    GroupID: 175,
    JPStartDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mayano Top Gun (SSR power)',
    GroupID: 175,
    JPStartDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Marvelous Sunday',
    GroupID: 174,
    JPStartDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Silence Suzuka (SR speed)',
    GroupID: 173,
    JPStartDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'TM Opera O (SSR intelligence)',
    GroupID: 173,
    JPStartDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Taiki Shuttle (Camping)',
    GroupID: 172,
    JPStartDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yamanin Zephyr',
    GroupID: 172,
    JPStartDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiwa Scarlet (SSR guts)',
    GroupID: 171,
    JPStartDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Aston Machan (SSR intelligence)',
    GroupID: 171,
    JPStartDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nishino Flower (Wedding)',
    GroupID: 170,
    JPStartDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Amazon (Wedding)',
    GroupID: 170,
    JPStartDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SR intelligence)',
    GroupID: 169,
    JPStartDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Jungle Pocket (SSR speed)',
    GroupID: 169,
    JPStartDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tanino Gimlet',
    GroupID: 168,
    JPStartDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yamanin Zephyr (SSR guts)',
    GroupID: 167,
    JPStartDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SSR guts)',
    GroupID: 167,
    JPStartDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Miracle',
    GroupID: 166,
    JPStartDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City',
    GroupID: 164,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tosen Jordan',
    GroupID: 164,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Palmer',
    GroupID: 164,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daitaku Helios',
    GroupID: 164,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mihono Bourbon (SSR intelligence)',
    GroupID: 163,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Laurel (SSR stamina)',
    GroupID: 163,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Matikanetannhauser (Sports Festival)',
    GroupID: 162,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Bakushin O (Sports Festival)',
    GroupID: 162,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Gold Ship (SR stamina)',
    GroupID: 161,
    JPStartDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Rudolf (SSR guts)',
    GroupID: 161,
    JPStartDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Neo Universe',
    GroupID: 160,
    JPStartDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Eishin Flash (SSR speed)',
    GroupID: 159,
    JPStartDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Groove (SSR intelligence)',
    GroupID: 159,
    JPStartDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Laurel',
    GroupID: 158,
    JPStartDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nice Nature (SSR power)',
    GroupID: 157,
    JPStartDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro McQueen (SSR stamina)',
    GroupID: 157,
    JPStartDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ardan (Ballroom)',
    GroupID: 156,
    JPStartDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Chiyono O (Ballroom)',
    GroupID: 156,
    JPStartDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Akebono (SR power)',
    GroupID: 155,
    JPStartDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ancestors & Guides (SSR group)',
    GroupID: 155,
    JPStartDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Symboli Kris S',
    GroupID: 154,
    JPStartDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sirius Symboli (SSR intelligence)',
    GroupID: 153,
    JPStartDate: moment('9 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SSR intelligence)',
    GroupID: 153,
    JPStartDate: moment('9 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daiichi Ruby',
    GroupID: 152,
    JPStartDate: moment('9 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Jungle Pocket (SR speed)',
    GroupID: 151,
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Dober (SR guts)',
    GroupID: 151,
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Rudolf (SR stamina)',
    GroupID: 151,
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Tachyon (SR power)',
    GroupID: 151,
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ramonu (SSR intelligence)',
    GroupID: 151,
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mr. C.B.',
    GroupID: 150,
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SSR intelligence)',
    GroupID: 149,
    JPStartDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SSR speed)',
    GroupID: 149,
    JPStartDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Shinko Windy',
    GroupID: 148,
    JPStartDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Marvelous Sunday (SSR speed)',
    GroupID: 147,
    JPStartDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Biko Pegasus (SSR power)',
    GroupID: 147,
    JPStartDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Ines Fujin (Valentine)',
    GroupID: 146,
    JPStartDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ryan (Valentine)',
    GroupID: 146,
    JPStartDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanefukukitaru (SSR speed)',
    GroupID: 145,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Taiki Shuttle (SSR speed)',
    GroupID: 145,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rice Shower (Halloween)',
    GroupID: 144,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Haru Urara (New Year)',
    GroupID: 144,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Aston Machan (SR speed)',
    GroupID: 143,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SSR guts)',
    GroupID: 143,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daitaku Helios',
    GroupID: 142,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Tachyon (SSR speed)',
    GroupID: 141,
    JPStartDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tokai Teio (SSR intelligence)',
    GroupID: 141,
    JPStartDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hokko Tarumae',
    GroupID: 140,
    JPStartDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Special Week (SSR stamina)',
    GroupID: 139,
    JPStartDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sweep Tosho (SSR intelligence)',
    GroupID: 139,
    JPStartDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kitasan Black (New Year)',
    GroupID: 138,
    JPStartDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Diamond (New Year)',
    GroupID: 138,
    JPStartDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'TM Opera O (SR stamina)',
    GroupID: 137,
    JPStartDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yamanin Zephyr (SSR guts)',
    GroupID: 137,
    JPStartDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Brian (Blaze)',
    GroupID: 136,
    JPStartDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mayano Top Gun (SSR speed)',
    GroupID: 135,
    JPStartDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Light Hello (SSR friend)',
    GroupID: 135,
    JPStartDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Zenno Rob Roy',
    GroupID: 134,
    JPStartDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Brian (SSR power)',
    GroupID: 133,
    JPStartDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Groove (SSR intelligence)',
    GroupID: 133,
    JPStartDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Vodka (Christmas)',
    GroupID: 132,
    JPStartDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daiwa Scarlet (Christmas)',
    GroupID: 132,
    JPStartDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Top Road (SR power)',
    GroupID: 129,
    JPStartDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Eishin Flash (SSR speed)',
    GroupID: 129,
    JPStartDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Wonder Acute',
    GroupID: 128,
    JPStartDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Super Creek (SSR stamina)',
    GroupID: 127,
    JPStartDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mr. C.B. (SSR intelligence)',
    GroupID: 127,
    JPStartDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nakayama Festa',
    GroupID: 126,
    JPStartDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SSR intelligence)',
    GroupID: 125,
    JPStartDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yaeno Muteki (SSR guts)',
    GroupID: 125,
    JPStartDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tamamo Cross (Festival)',
    GroupID: 124,
    JPStartDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Inari One (Festival)',
    GroupID: 124,
    JPStartDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tsurumaru Tsuyoshi (SR guts)',
    GroupID: 123,
    JPStartDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Kris S (SSR stamina)',
    GroupID: 123,
    JPStartDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yamanin Zephyr',
    GroupID: 122,
    JPStartDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SR guts)',
    GroupID: 131,
    JPStartDate: moment('16 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiichi Ruby (SSR power)',
    GroupID: 131,
    JPStartDate: moment('16 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seeking the Pearl',
    GroupID: 130,
    JPStartDate: moment('16 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fine Motion (SSR intelligence)',
    GroupID: 121,
    JPStartDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SSR speed)',
    GroupID: 121,
    JPStartDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Aston Machan',
    GroupID: 120,
    JPStartDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Palmer (SSR stamina)',
    GroupID: 119,
    JPStartDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daitaku Helios (SSR speed)',
    GroupID: 119,
    JPStartDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Agnes Digital (Halloween)',
    GroupID: 118,
    JPStartDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Meisho Doto (Halloween)',
    GroupID: 118,
    JPStartDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SR guts)',
    GroupID: 117,
    JPStartDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiichi Ruby (SSR power)',
    GroupID: 117,
    JPStartDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seeking the Pearl',
    GroupID: 116,
    JPStartDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Silence Suzuka (SSR speed)',
    GroupID: 115,
    JPStartDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Smart Falcon (SSR power)',
    GroupID: 115,
    JPStartDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yukino Bijin',
    GroupID: 114,
    JPStartDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tokai Teio (SSR intelligence)',
    GroupID: 113,
    JPStartDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Twin Turbo (SSR guts)',
    GroupID: 113,
    JPStartDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Winning Ticket (Steampunk)',
    GroupID: 112,
    JPStartDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Taishin (Steampunk)',
    GroupID: 112,
    JPStartDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Light Hello (SSR friend)',
    GroupID: 111,
    JPStartDate: moment('23 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Tachyon (SSR speed)',
    GroupID: 111,
    JPStartDate: moment('23 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Smart Falcon (Grand Live)',
    GroupID: 110,
    JPStartDate: moment('23 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seiun Sky (SR intelligence)',
    GroupID: 109,
    JPStartDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Manhattan Cafe (SSR stamina)',
    GroupID: 109,
    JPStartDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Copano Rickey',
    GroupID: 108,
    JPStartDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yukino Bijin (SSR intelligence)',
    GroupID: 107,
    JPStartDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SSR guts)',
    GroupID: 107,
    JPStartDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Bamboo Memory',
    GroupID: 106,
    JPStartDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SSR speed)',
    GroupID: 105,
    JPStartDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nakayama Festa (SSR intelligence)',
    GroupID: 105,
    JPStartDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro McQueen (Summer)',
    GroupID: 104,
    JPStartDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold Ship (Summer)',
    GroupID: 104,
    JPStartDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'El Condor Pasa (SR speed)',
    GroupID: 103,
    JPStartDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'The Throne\'s Assemblage (SSR group)',
    GroupID: 103,
    JPStartDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Brian',
    GroupID: 102,
    JPStartDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seiun Sky',
    GroupID: 102,
    JPStartDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Gold City (SR intelligence)',
    GroupID: 101,
    JPStartDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Groove (SSR power)',
    GroupID: 101,
    JPStartDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Air Shakur',
    GroupID: 100,
    JPStartDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'El Condor Pasa (SSR guts)',
    GroupID: 99,
    JPStartDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanetannhauser (SSR intelligence)',
    GroupID: 99,
    JPStartDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Taiki Shuttle (Camping)',
    GroupID: 98,
    JPStartDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Dober (Camping)',
    GroupID: 98,
    JPStartDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SR guts)',
    GroupID: 97,
    JPStartDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Taiki Shuttle (SSR speed)',
    GroupID: 97,
    JPStartDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sweep Tosho',
    GroupID: 96,
    JPStartDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Chiyono O (SSR stamina)',
    GroupID: 95,
    JPStartDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Admire Vega (SSR power)',
    GroupID: 95,
    JPStartDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Inari One',
    GroupID: 94,
    JPStartDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Haru Urara (SSR power)',
    GroupID: 93,
    JPStartDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SSR stamina)',
    GroupID: 93,
    JPStartDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Curren Chan (Wedding)',
    GroupID: 92,
    JPStartDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fine Motion (Wedding)',
    GroupID: 92,
    JPStartDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Rice Shower (SSR power)',
    GroupID: 91,
    JPStartDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanefukukitaru (SSR speed)',
    GroupID: 91,
    JPStartDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Palmer',
    GroupID: 90,
    JPStartDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tokai Teio (SR stamina)',
    GroupID: 89,
    JPStartDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mr. C.B. (SSR intelligence)',
    GroupID: 89,
    JPStartDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Ines Fujin',
    GroupID: 88,
    JPStartDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Bamboo Memory (SSR guts)',
    GroupID: 87,
    JPStartDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seeking the Pearl (SSR speed)',
    GroupID: 87,
    JPStartDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nice Nature (Cheerleader)',
    GroupID: 86,
    JPStartDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'King Halo (Cheerleader)',
    GroupID: 86,
    JPStartDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ines Fujin (SSR guts)',
    GroupID: 85,
    JPStartDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Twin Turbo (SSR speed)',
    GroupID: 85,
    JPStartDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yaeno Muteki',
    GroupID: 84,
    JPStartDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sweep Tosho (SR intelligence)',
    GroupID: 83,
    JPStartDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiwa Scarlet (SSR power)',
    GroupID: 83,
    JPStartDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nishino Flower',
    GroupID: 82,
    JPStartDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Rudolf (SSR stamina)',
    GroupID: 81,
    JPStartDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sirius Symboli (SSR intelligence)',
    GroupID: 81,
    JPStartDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seiun Sky (Ballroom)',
    GroupID: 80,
    JPStartDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fuji Kiseki (Ballroom)',
    GroupID: 80,
    JPStartDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Zenno Rob Roy (SSR speed)',
    GroupID: 79,
    JPStartDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Chan (SSR intelligence)',
    GroupID: 79,
    JPStartDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Bright',
    GroupID: 78,
    JPStartDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Chan (SR speed)',
    GroupID: 77,
    JPStartDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Marvelous Sunday (SSR guts)',
    GroupID: 77,
    JPStartDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Diamond',
    GroupID: 76,
    JPStartDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ryan (SR stamina)',
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.01,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Admire Vega (SR guts)',
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.01,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Bakushin O (SR power)',
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.01,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Top Road (SSR speed)',
    GroupID: 75,
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Matikanetannhauser',
    GroupID: 74,
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kitasan Black',
    GroupID: 74,
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fine Motion (SSR intelligence)',
    GroupID: 73,
    JPStartDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kawakami Princess (SSR speed)',
    GroupID: 73,
    JPStartDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Admire Vega',
    GroupID: 72,
    JPStartDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ines Fujin (SR intelligence)',
    GroupID: 71,
    JPStartDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Digital (SSR power)',
    GroupID: 71,
    JPStartDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ardan',
    GroupID: 70,
    JPStartDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SSR intelligence)',
    GroupID: 69,
    JPStartDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Bakushin O (SSR guts)',
    GroupID: 69,
    JPStartDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mihono Bourbon (Valentine)',
    GroupID: 68,
    JPStartDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Eishin Flash (Valentine)',
    GroupID: 68,
    JPStartDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tazuna Hayakawa (SSR friend)',
    GroupID: 67,
    JPStartDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Riko Kashimoto (SSR friend)',
    GroupID: 67,
    JPStartDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Chiyono O',
    GroupID: 66,
    JPStartDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tamamo Cross (SR guts)',
    GroupID: 65,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sasami Anshinzawa (SSR friend)',
    GroupID: 65,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: '1st Anniversary Rerun',
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.000638,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Admire Vega (SSR power)',
    GroupID: 63,
    JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanefukukitaru (SSR speed)',
    GroupID: 63,
    JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Haru Urara (New Year)',
    GroupID: 62,
    JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'TM Opera O (New Year)',
    GroupID: 62,
    JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SSR power)',
    GroupID: 61,
    JPStartDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nice Nature (SSR intelligence)',
    GroupID: 61,
    JPStartDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tamamo Cross',
    GroupID: 60,
    JPStartDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Inari One (SR power)',
    GroupID: 59,
    JPStartDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Manhattan Cafe (SSR stamina)',
    GroupID: 59,
    JPStartDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fine Motion',
    GroupID: 58,
    JPStartDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mayano Top Gun (SSR speed)',
    GroupID: 57,
    JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Taishin (SSR intelligence)',
    GroupID: 57,
    JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Oguri Cap (Christmas)',
    GroupID: 56,
    JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide (Christmas)',
    GroupID: 56,
    JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vodka (SR speed)',
    GroupID: 55,
    JPStartDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daitaku Helios (SSR power)',
    GroupID: 55,
    JPStartDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Dober',
    GroupID: 54,
    JPStartDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'El Condor Pasa (SSR power)',
    GroupID: 53,
    JPStartDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kitasan Black (SSR speed)',
    GroupID: 53,
    JPStartDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tosen Jordan',
    GroupID: 52,
    JPStartDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Chan (SSR intelligence)',
    GroupID: 51,
    JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Brian (SSR stamina)',
    GroupID: 51,
    JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Symboli Rudolf (Festival)',
    GroupID: 50,
    JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City (Festival)',
    GroupID: 50,
    JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sirius Symboli (SR guts)',
    GroupID: 49,
    JPStartDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nakayama Festa (SSR stamina)',
    GroupID: 49,
    JPStartDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Manhattan Cafe',
    GroupID: 48,
    JPStartDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seiun Sky (SSR stamina)',
    GroupID: 47,
    JPStartDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yaeno Muteki (SSR power)',
    GroupID: 47,
    JPStartDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kawakami Princess',
    GroupID: 46,
    JPStartDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tamamo Cross (SSR power)',
    GroupID: 45,
    JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Zenno Rob Roy (SSR speed)',
    GroupID: 45,
    JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rice Shower (Halloween)',
    GroupID: 44,
    JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Super Creek (Halloween)',
    GroupID: 44,
    JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fine Motion (SR power)',
    GroupID: 43,
    JPStartDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SSR guts)',
    GroupID: 43,
    JPStartDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Agnes Digital',
    GroupID: 42,
    JPStartDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Bakushin O (SSR speed)',
    GroupID: 41,
    JPStartDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Biko Pegasus (SSR speed)',
    GroupID: 41,
    JPStartDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075,
    Disabled: true
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Akebono',
    GroupID: 40,
    JPStartDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Rice Shower (SSR power)',
    GroupID: 39,
    JPStartDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Riko Kashimoto (SSR friend)',
    GroupID: 39,
    JPStartDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Matikanefukukitaru (Full Armor)',
    GroupID: 38,
    JPStartDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tosen Jordan (SR stamina)',
    GroupID: 37,
    JPStartDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nice Nature (SSR intelligence)',
    GroupID: 37,
    JPStartDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Eishin Flash',
    GroupID: 36,
    JPStartDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Special Week (SSR guts)',
    GroupID: 35,
    JPStartDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tokai Teio (SSR speed)',
    GroupID: 35,
    JPStartDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Meisho Doto',
    GroupID: 34,
    JPStartDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sweep Tosho (SSR speed)',
    GroupID: 33,
    JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Winning Ticket (SSR stamina)',
    GroupID: 33,
    JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Special Week (Summer)',
    GroupID: 32,
    JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Maruzensky (Summer)',
    GroupID: 32,
    JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vodka (SSR power)',
    GroupID: 31,
    JPStartDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SSR speed)',
    GroupID: 31,
    JPStartDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City',
    GroupID: 30,
    JPStartDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ardan (SR intelligence)',
    GroupID: 29,
    JPStartDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ryan (SSR guts)',
    GroupID: 29,
    JPStartDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fuji Kiseki',
    GroupID: 28,
    JPStartDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seiun Sky (SSR intelligence)',
    GroupID: 27,
    JPStartDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('21 Sept 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('4 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'King Halo (SSR power)',
    GroupID: 27,
    JPStartDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('21 Sept 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('4 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'El Condor Pasa (Fantasy)',
    GroupID: 26,
    JPStartDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('21 Sept 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('4 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Grass Wonder (Fantasy)',
    GroupID: 26,
    JPStartDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('21 Sept 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('4 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Shinko Windy (SR speed)',
    GroupID: 25,
    JPStartDate: moment('20 Jun 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true,

    GlobalStartDate: moment('17 Sept 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('25 Sept 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Bamboo Memory (SSR power)',
    GroupID: 25,
    JPStartDate: moment('20 Jun 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('17 Sept 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('25 Sept 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Amazon',
    GroupID: 24,
    JPStartDate: moment('20 Jun 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('17 Sept 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('25 Sept 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Silence Suzuka (SSR speed)',
    GroupID: 23,
    JPStartDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075,

    GlobalStartDate: moment('7 Sept 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tamamo Cross (SSR stamina)',
    GroupID: 23,
    JPStartDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075,

    GlobalStartDate: moment('7 Sept 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seiun Sky',
    GroupID: 22,
    JPStartDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('7 Sept 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kawakami Princess (SSR speed)',
    GroupID: 21,
    JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Akebono (SSR guts)',
    GroupID: 21,
    JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mayano Top Gun (Wedding)',
    GroupID: 20,
    JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Air Groove (Wedding)',
    GroupID: 20,
    JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seeking the Pearl (SR guts)',
    GroupID: 19,
    JPStartDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Chiyono O (SSR stamina)',
    GroupID: 19,
    JPStartDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Brian',
    GroupID: 18,
    JPStartDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Super Creek (SSR stamina)',
    GroupID: 17,
    JPStartDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tazuna Hayakawa (SSR friend)',
    GroupID: 17,
    JPStartDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Smart Falcon',
    GroupID: 16,
    JPStartDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Zenno Rob Roy (SR stamina)',
    GroupID: 15,
    JPStartDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yaeno Muteki (SSR power)',
    GroupID: 15,
    JPStartDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Taishin',
    GroupID: 14,
    JPStartDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SR power)',
    GroupID: 13,
    JPStartDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yukino Bijin (SSR intelligence)',
    GroupID: 13,
    JPStartDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Curren Chan',
    GroupID: 12,
    JPStartDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kitasan Black (SSR speed)',
    GroupID: 11,
    JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.005
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Satono Diamond (SSR stamina)',
    GroupID: 11,
    JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.005
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tokai Teio (Anime Collab)',
    GroupID: 10,
    JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.005
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro McQueen (Anime Collab)',
    GroupID: 10,
    JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.005
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SR intelligence)',
    GroupID: 9,
    JPStartDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Palmer (SSR guts)',
    GroupID: 9,
    JPStartDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide',
    GroupID: 8,
    JPStartDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daitaku Helios (SR power)',
    GroupID: 7,
    JPStartDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Twin Turbo (SSR speed)',
    GroupID: 7,
    JPStartDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mihono Bourbon',
    GroupID: 6,
    JPStartDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sweep Tosho (SR speed)',
    GroupID: 5,
    JPStartDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SSR power)',
    GroupID: 5,
    JPStartDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'TM Opera O',
    GroupID: 4,
    JPStartDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Support Card Launch Banner',
    JPStartDate: moment('23 Feb 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0015,
    Disabled: true
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Trainee Launch Banner',
    JPStartDate: moment('23 Feb 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.003334,
    Disabled: true
  }
].reverse();