const BannerTypes = {
    Uma:   {Value: 1},
    Card:  {Value: 2}
};

const BannersInfo = [
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Believe',
    JPStartDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Biko Pegasus (SR intelligence)',
    JPStartDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiichi Ruby (SSR guts)',
    JPStartDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Espoir City',
    JPStartDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Calstone Light O (SSR speed)',
    JPStartDate: moment('28 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Durandal (SSR intelligence)',
    JPStartDate: moment('28 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'K.S.Miracle (Alt Version)',
    JPStartDate: moment('28 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Miracle (Alt Version)',
    JPStartDate: moment('28 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Stay Gold (SSR guts)',
    JPStartDate: moment('23 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Admire Groove (SSR speed)',
    JPStartDate: moment('23 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Still in Love',
    JPStartDate: moment('23 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Vivlos (Summer)',
    JPStartDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Win Variation (SSR intelligence)',
    JPStartDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Duramente (SSR stamina)',
    JPStartDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Crown (Summer)',
    JPStartDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Cheval Grand (Summer)',
    JPStartDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fusaichi Pandora',
    JPStartDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kawakami Princess (SR guts)',
    JPStartDate: moment('10 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ryan (SSR stamina)',
    JPStartDate: moment('10 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Ines Fujin (Deserted Island)',
    JPStartDate: moment('10 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tamamo Cross (SSR power)',
    JPStartDate: moment('26 Jun 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tucker Bryne (SSR friend)',
    JPStartDate: moment('26 Jun 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City (Deserted Island)',
    JPStartDate: moment('26 Jun 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Chrono Genesis',
    JPStartDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Rhein Kraft (SSR speed)',
    JPStartDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daring Heart (SSR intelligence)',
    JPStartDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ramonu (Wedding)',
    JPStartDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Cesario (Wedding)',
    JPStartDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Loves Only You',
    JPStartDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Bouquetd\'or (SR stamina)',
    JPStartDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Silence Suzuka (SSR guts)',
    JPStartDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Verxina',
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
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Buena Vista (SSR power)',
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Copano Rickey (Parade)',
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Smart Falcon (Parade)',
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fenomeno',
    JPStartDate: moment('20 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'No Reason',
    JPStartDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daring Heart (SR power)',
    JPStartDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daring Tact (SSR intelligence)',
    JPStartDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sirius Symboli (The Twinkle Legends)',
    JPStartDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vodka (SSR power)',
    JPStartDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Dream Journey (SSR speed)',
    JPStartDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tap Dance City (Ballroom)',
    JPStartDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tanino Gimlet (Ballroom)',
    JPStartDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'No Reason',
    JPStartDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Rice Shower (SR speed)',
    JPStartDate: moment('10 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Bright (SSR stamina)',
    JPStartDate: moment('10 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gran Alegria',
    JPStartDate: moment('10 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Lucky Lilac (SR intelligence)',
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.015,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro McQueen (SR guts)',
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.015,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Embodiment of Legends (SSR group)',
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Almond Eye (SSR speed)',
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Orfevre',
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tsurumaru Tsuyoshi',
    JPStartDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Chan (SSR guts)',
    JPStartDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SSR intelligence)',
    JPStartDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Aston Machan (Valentine)',
    JPStartDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yamanin Zephyr (Valentine)',
    JPStartDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Furioso',
    JPStartDate: moment('19 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ramonu (SR stamina)',
    JPStartDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seeking the Pearl (SSR speed)',
    JPStartDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Maruzensky (New Year)',
    JPStartDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Rudolf (SSR intelligence)',
    JPStartDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ardan (SSR power)',
    JPStartDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Katsuragi Ace (New Year)',
    JPStartDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mr. C.B. (New Year)',
    JPStartDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Grass Wonder (New Year)',
    JPStartDate: moment('18 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Bubble Gum Fellow (SR speed)',
    JPStartDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Blast Onepiece (SSR guts)',
    JPStartDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Win Variation',
    JPStartDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Digital (SSR intelligence)',
    JPStartDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Meisho Doto (SSR speed)',
    JPStartDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Top Road (Christmas)',
    JPStartDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Admire Vega (Christmas)',
    JPStartDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Air Messiah',
    JPStartDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'North Flight (SR power)',
    JPStartDate: moment('7 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Kris S (SSR power)',
    JPStartDate: moment('7 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Taishin (Mecha)',
    JPStartDate: moment('7 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Shakur (SSR stamina)',
    JPStartDate: moment('28 Oct 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiwa Scarlet (SSR intelligence)',
    JPStartDate: moment('28 Oct 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide (Mecha)',
    JPStartDate: moment('28 Oct 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Bubble Gum Fellow',
    JPStartDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Amazon (SSR guts)',
    JPStartDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Brian (SSR speed)',
    JPStartDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seeking the Pearl (Halloween)',
    JPStartDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mayano Top Gun (Halloween)',
    JPStartDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Durandal',
    JPStartDate: moment('19 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Laurel (SR intelligence)',
    JPStartDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Espoir City (SSR power)',
    JPStartDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Cesario',
    JPStartDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Taiki Shuttle (SSR intelligence)',
    JPStartDate: moment('29 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fuji Kiseki (SSR guts)',
    JPStartDate: moment('29 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Neo Universe (Autumn)',
    JPStartDate: moment('29 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Zenno Rob Roy (Autumn)',
    JPStartDate: moment('29 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Marvelous Sunday (SR guts)',
    JPStartDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Still in Love (SSR speed)',
    JPStartDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gentildonna',
    JPStartDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Palmer (SR stamina)',
    JPStartDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fine Motion (SSR guts)',
    JPStartDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Smart Falcon (SSR speed)',
    JPStartDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Copano Rickey (SSR intelligence)',
    JPStartDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Eishin Flash (Summer Trip)',
    JPStartDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hokko Tarumae (Summer Trip)',
    JPStartDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Calstone Light O',
    JPStartDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanefukukitaru (SR speed)',
    JPStartDate: moment('8 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Dantsu Flame (SSR stamina)',
    JPStartDate: moment('8 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rice Shower (Great Food Festival)',
    JPStartDate: moment('8 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yayoi Akikawa (SSR friend)',
    JPStartDate: moment('25 Jun 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SSR power)',
    JPStartDate: moment('25 Jun 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Dream Journey',
    JPStartDate: moment('25 Jun 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Jungle Pocket',
    JPStartDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('25 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vivlos (SSR speed)',
    JPStartDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seiun Sky (SSR power)',
    JPStartDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'King Halo (Wedding)',
    JPStartDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sweep Tosho (Wedding)',
    JPStartDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'North Flight',
    JPStartDate: moment('19 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Dantsu Flame (SR intelligence)',
    JPStartDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vodka (SSR guts)',
    JPStartDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Agnes Tachyon (Alt Version)',
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
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Taishin (SSR intelligence)',
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Super Creek (Warfare)',
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yaeno Muteki (Warfare)',
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sounds of Earth',
    JPStartDate: moment('18 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Shakur (SR power)',
    JPStartDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Neo Universe (SSR intelligence)',
    JPStartDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Winning Ticket (U.A.F.)',
    JPStartDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SSR power)',
    JPStartDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yamanin Zephyr (SSR speed)',
    JPStartDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daiichi Ruby (Ballroom)',
    JPStartDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daitaku Helios (Ballroom)',
    JPStartDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tap Dance City (SR guts)',
    JPStartDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Cheval Grand (SSR stamina)',
    JPStartDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rhein Kraft',
    JPStartDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Transcend',
    JPStartDate: moment('11 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tosen Jordan (SR speed)',
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.015,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yaeno Muteki (SR stamina)',
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.015,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Orfevre (SSR guts)',
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ryoka Tsurugi (SSR friend)',
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Ikuno Dictus',
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Duramente',
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biko Pegasus',
    JPStartDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Winning Ticket (SSR power)',
    JPStartDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Bakushin O (SSR speed)',
    JPStartDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yukino Bijin (Valentine)',
    JPStartDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Manhattan Cafe (Valentine)',
    JPStartDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tanino Gimlet (SR intelligence)',
    JPStartDate: moment('18 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hokko Tarumae (SSR stamina)',
    JPStartDate: moment('18 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Vivlos',
    JPStartDate: moment('18 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nice Nature (New Year)',
    JPStartDate: moment('8 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Duramente (SSR speed)',
    JPStartDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Satono Diamond (SSR intelligence)',
    JPStartDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kitasan Black (Anime Collab)',
    JPStartDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Royce and Royce (SR power)',
    JPStartDate: moment('19 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vivlos (SSR guts)',
    JPStartDate: moment('19 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Cheval Grand',
    JPStartDate: moment('19 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Crown',
    JPStartDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Dober (SSR speed)',
    JPStartDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ramonu (SSR power)',
    JPStartDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Palmer (Christmas)',
    JPStartDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Bright (Christmas)',
    JPStartDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Verxina (SR guts)',
    JPStartDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sounds of Earth (SSR stamina)',
    JPStartDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tap Dance City',
    JPStartDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanetannhauser (SR speed)',
    JPStartDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro McQueen (SSR intelligence)',
    JPStartDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tsurumaru Tsuyoshi (SSR power)',
    JPStartDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'King Halo (SSR guts)',
    JPStartDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kawakami Princess (Festival)',
    JPStartDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tokai Teio (Festival)',
    JPStartDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nice Nature (SR stamina)',
    JPStartDate: moment('18 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Gold Ship (SSR speed)',
    JPStartDate: moment('18 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ramonu',
    JPStartDate: moment('18 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tanino Gimlet (SSR stamina)',
    JPStartDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tap Dance City (SSR guts)',
    JPStartDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Air Shakur (Halloween)',
    JPStartDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Symboli Kris S (Halloween)',
    JPStartDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Taiki Shuttle (SR intelligence)',
    JPStartDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Amazon (SSR power)',
    JPStartDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'K.S.Miracle',
    JPStartDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Special Week (SSR stamina)',
    JPStartDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro McQueen (SSR stamina)',
    JPStartDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Diamond (Project L\'Arc)',
    JPStartDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kitasan Black (SR stamina)',
    JPStartDate: moment('30 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nakayama Festa (SSR intelligence)',
    JPStartDate: moment('30 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold Ship (Project L\'Arc)',
    JPStartDate: moment('30 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mei Satake (SSR friend)',
    JPStartDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'El Condor Pasa (SSR speed)',
    JPStartDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Top Road',
    JPStartDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SSR speed)',
    JPStartDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ramonu (SSR intelligence)',
    JPStartDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Copano Rickey',
    JPStartDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hokko Tarumae',
    JPStartDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Manhattan Cafe (SSR intelligence)',
    JPStartDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Jungle Pocket (SSR guts)',
    JPStartDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Agnes Tachyon (Summer)',
    JPStartDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Silence Suzuka (Summer)',
    JPStartDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Grass Wonder (SR power)',
    JPStartDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Wonder Acute (SSR power)',
    JPStartDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sirius Symboli',
    JPStartDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Twin Turbo (SSR guts)',
    JPStartDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiichi Ruby (SSR power)',
    JPStartDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Katsuragi Ace',
    JPStartDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Gold City (SSR guts)',
    JPStartDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Palmer (SSR speed)',
    JPStartDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Bamboo Memory (Summer Trip)',
    JPStartDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tosen Jordan (Summer Trip)',
    JPStartDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Copano Rickey (SR guts)',
    JPStartDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mayano Top Gun (SSR power)',
    JPStartDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Marvelous Sunday',
    JPStartDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Silence Suzuka (SR speed)',
    JPStartDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'TM Opera O (SSR intelligence)',
    JPStartDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Taiki Shuttle (Camping)',
    JPStartDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yamanin Zephyr',
    JPStartDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiwa Scarlet (SSR guts)',
    JPStartDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Aston Machan (SSR intelligence)',
    JPStartDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nishino Flower (Wedding)',
    JPStartDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Amazon (Wedding)',
    JPStartDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SR intelligence)',
    JPStartDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Jungle Pocket (SSR speed)',
    JPStartDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tanino Gimlet',
    JPStartDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yamanin Zephyr (SSR guts)',
    JPStartDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SSR guts)',
    JPStartDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Miracle',
    JPStartDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City',
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tosen Jordan',
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Palmer',
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daitaku Helios',
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mihono Bourbon (SSR intelligence)',
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Laurel (SSR stamina)',
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Matikanetannhauser (Sports Festival)',
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Bakushin O (Sports Festival)',
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Gold Ship (SR stamina)',
    JPStartDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Rudolf (SSR guts)',
    JPStartDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Neo Universe',
    JPStartDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Eishin Flash (SSR speed)',
    JPStartDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Groove (SSR intelligence)',
    JPStartDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Laurel',
    JPStartDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nice Nature (SSR power)',
    JPStartDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro McQueen (SSR stamina)',
    JPStartDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ardan (Ballroom)',
    JPStartDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Chiyono O (Ballroom)',
    JPStartDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Akebono (SR power)',
    JPStartDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ancestors & Guides (SSR group)',
    JPStartDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Symboli Kris S',
    JPStartDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sirius Symboli (SSR intelligence)',
    JPStartDate: moment('9 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SSR intelligence)',
    JPStartDate: moment('9 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daiichi Ruby',
    JPStartDate: moment('9 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Jungle Pocket (SR speed)',
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Dober (SR guts)',
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Rudolf (SR stamina)',
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Tachyon (SR power)',
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ramonu (SSR intelligence)',
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mr. C.B.',
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SSR intelligence)',
    JPStartDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SSR speed)',
    JPStartDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Shinko Windy',
    JPStartDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Marvelous Sunday (SSR speed)',
    JPStartDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Biko Pegasus (SSR power)',
    JPStartDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Ines Fujin (Valentine)',
    JPStartDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ryan (Valentine)',
    JPStartDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanefukukitaru (SSR speed)',
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Taiki Shuttle (SSR speed)',
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rice Shower (Halloween)',
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Haru Urara (New Year)',
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Aston Machan (SR speed)',
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SSR guts)',
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daitaku Helios',
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Tachyon (SSR speed)',
    JPStartDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tokai Teio (SSR intelligence)',
    JPStartDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hokko Tarumae',
    JPStartDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Special Week (SSR stamina)',
    JPStartDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sweep Tosho (SSR intelligence)',
    JPStartDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kitasan Black (New Year)',
    JPStartDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Diamond (New Year)',
    JPStartDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'TM Opera O (SR stamina)',
    JPStartDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yamanin Zephyr (SSR guts)',
    JPStartDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Brian (Blaze)',
    JPStartDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mayano Top Gun (SSR speed)',
    JPStartDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Light Hello (SSR friend)',
    JPStartDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Zenno Rob Roy',
    JPStartDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Brian (SSR power)',
    JPStartDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Groove (SSR intelligence)',
    JPStartDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Vodka (Christmas)',
    JPStartDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daiwa Scarlet (Christmas)',
    JPStartDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Top Road (SR power)',
    JPStartDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Eishin Flash (SSR speed)',
    JPStartDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Wonder Acute',
    JPStartDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Super Creek (SSR stamina)',
    JPStartDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mr. C.B. (SSR intelligence)',
    JPStartDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nakayama Festa',
    JPStartDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SSR intelligence)',
    JPStartDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yaeno Muteki (SSR guts)',
    JPStartDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tamamo Cross (Festival)',
    JPStartDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Inari One (Festival)',
    JPStartDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tsurumaru Tsuyoshi (SR guts)',
    JPStartDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Kris S (SSR stamina)',
    JPStartDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yamanin Zephyr',
    JPStartDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SR guts)',
    JPStartDate: moment('16 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiichi Ruby (SSR power)',
    JPStartDate: moment('16 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seeking the Pearl',
    JPStartDate: moment('16 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fine Motion (SSR intelligence)',
    JPStartDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SSR speed)',
    JPStartDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Aston Machan',
    JPStartDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Palmer (SSR stamina)',
    JPStartDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daitaku Helios (SSR speed)',
    JPStartDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Agnes Digital (Halloween)',
    JPStartDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Meisho Doto (Halloween)',
    JPStartDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SR guts)',
    JPStartDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiichi Ruby (SSR power)',
    JPStartDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seeking the Pearl',
    JPStartDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Silence Suzuka (SSR speed)',
    JPStartDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Smart Falcon (SSR power)',
    JPStartDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yukino Bijin',
    JPStartDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tokai Teio (SSR intelligence)',
    JPStartDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Twin Turbo (SSR guts)',
    JPStartDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Winning Ticket (Steampunk)',
    JPStartDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Taishin (Steampunk)',
    JPStartDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Light Hello (SSR friend)',
    JPStartDate: moment('23 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Tachyon (SSR speed)',
    JPStartDate: moment('23 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Smart Falcon (Grand Live)',
    JPStartDate: moment('23 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seiun Sky (SR intelligence)',
    JPStartDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Manhattan Cafe (SSR stamina)',
    JPStartDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Copano Rickey',
    JPStartDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yukino Bijin (SSR intelligence)',
    JPStartDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SSR guts)',
    JPStartDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Bamboo Memory',
    JPStartDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SSR speed)',
    JPStartDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nakayama Festa (SSR intelligence)',
    JPStartDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro McQueen (Summer)',
    JPStartDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold Ship (Summer)',
    JPStartDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'El Condor Pasa (SR speed)',
    JPStartDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'The Throne\'s Assemblage (SSR group)',
    JPStartDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Brian',
    JPStartDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seiun Sky',
    JPStartDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Gold City (SR intelligence)',
    JPStartDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Groove (SSR power)',
    JPStartDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Air Shakur',
    JPStartDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'El Condor Pasa (SSR guts)',
    JPStartDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanetannhauser (SSR intelligence)',
    JPStartDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Taiki Shuttle (Camping)',
    JPStartDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Dober (Camping)',
    JPStartDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SR guts)',
    JPStartDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Taiki Shuttle (SSR speed)',
    JPStartDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sweep Tosho',
    JPStartDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Chiyono O (SSR stamina)',
    JPStartDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Admire Vega (SSR power)',
    JPStartDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Inari One',
    JPStartDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Haru Urara (SSR power)',
    JPStartDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SSR stamina)',
    JPStartDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Curren Chan (Wedding)',
    JPStartDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fine Motion (Wedding)',
    JPStartDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Rice Shower (SSR power)',
    JPStartDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanefukukitaru (SSR speed)',
    JPStartDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Palmer',
    JPStartDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tokai Teio (SR stamina)',
    JPStartDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mr. C.B. (SSR intelligence)',
    JPStartDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Ines Fujin',
    JPStartDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Bamboo Memory (SSR guts)',
    JPStartDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seeking the Pearl (SSR speed)',
    JPStartDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nice Nature (Cheerleader)',
    JPStartDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'King Halo (Cheerleader)',
    JPStartDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ines Fujin (SSR guts)',
    JPStartDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Twin Turbo (SSR speed)',
    JPStartDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yaeno Muteki',
    JPStartDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sweep Tosho (SR intelligence)',
    JPStartDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiwa Scarlet (SSR power)',
    JPStartDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nishino Flower',
    JPStartDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Rudolf (SSR stamina)',
    JPStartDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sirius Symboli (SSR intelligence)',
    JPStartDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seiun Sky (Ballroom)',
    JPStartDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fuji Kiseki (Ballroom)',
    JPStartDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Zenno Rob Roy (SSR speed)',
    JPStartDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Chan (SSR intelligence)',
    JPStartDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Bright',
    JPStartDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Chan (SR speed)',
    JPStartDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Marvelous Sunday (SSR guts)',
    JPStartDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Diamond',
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
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Matikanetannhauser',
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kitasan Black',
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fine Motion (SSR intelligence)',
    JPStartDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kawakami Princess (SSR speed)',
    JPStartDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Admire Vega',
    JPStartDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ines Fujin (SR intelligence)',
    JPStartDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Digital (SSR power)',
    JPStartDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ardan',
    JPStartDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SSR intelligence)',
    JPStartDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Bakushin O (SSR guts)',
    JPStartDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mihono Bourbon (Valentine)',
    JPStartDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Eishin Flash (Valentine)',
    JPStartDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tazuna Hayakawa (SSR friend)',
    JPStartDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Riko Kashimoto (SSR friend)',
    JPStartDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Chiyono O',
    JPStartDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tamamo Cross (SR guts)',
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sasami Anshinzawa (SSR friend)',
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
    JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanefukukitaru (SSR speed)',
    JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Haru Urara (New Year)',
    JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'TM Opera O (New Year)',
    JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SSR power)',
    JPStartDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nice Nature (SSR intelligence)',
    JPStartDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tamamo Cross',
    JPStartDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Inari One (SR power)',
    JPStartDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Manhattan Cafe (SSR stamina)',
    JPStartDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fine Motion',
    JPStartDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mayano Top Gun (SSR speed)',
    JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Taishin (SSR intelligence)',
    JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Oguri Cap (Christmas)',
    JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide (Christmas)',
    JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vodka (SR speed)',
    JPStartDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daitaku Helios (SSR power)',
    JPStartDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Dober',
    JPStartDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'El Condor Pasa (SSR power)',
    JPStartDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kitasan Black (SSR speed)',
    JPStartDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tosen Jordan',
    JPStartDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Chan (SSR intelligence)',
    JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Brian (SSR stamina)',
    JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Symboli Rudolf (Festival)',
    JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City (Festival)',
    JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sirius Symboli (SR guts)',
    JPStartDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nakayama Festa (SSR stamina)',
    JPStartDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Manhattan Cafe',
    JPStartDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seiun Sky (SSR stamina)',
    JPStartDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yaeno Muteki (SSR power)',
    JPStartDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kawakami Princess',
    JPStartDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tamamo Cross (SSR power)',
    JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Zenno Rob Roy (SSR speed)',
    JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rice Shower (Halloween)',
    JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Super Creek (Halloween)',
    JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fine Motion (SR power)',
    JPStartDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SSR guts)',
    JPStartDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Agnes Digital',
    JPStartDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Bakushin O (SSR speed)',
    JPStartDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Biko Pegasus (SSR speed)',
    JPStartDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Akebono',
    JPStartDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Rice Shower (SSR power)',
    JPStartDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Riko Kashimoto (SSR friend)',
    JPStartDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Matikanefukukitaru (Full Armor)',
    JPStartDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tosen Jordan (SR stamina)',
    JPStartDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nice Nature (SSR intelligence)',
    JPStartDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Eishin Flash',
    JPStartDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Special Week (SSR guts)',
    JPStartDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tokai Teio (SSR speed)',
    JPStartDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Meisho Doto',
    JPStartDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sweep Tosho (SSR speed)',
    JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Winning Ticket (SSR stamina)',
    JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Special Week (Summer)',
    JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Maruzensky (Summer)',
    JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vodka (SSR power)',
    JPStartDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SSR speed)',
    JPStartDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City',
    JPStartDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ardan (SR intelligence)',
    JPStartDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ryan (SSR guts)',
    JPStartDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fuji Kiseki',
    JPStartDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seiun Sky (SSR intelligence)',
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
    JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Akebono (SSR guts)',
    JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mayano Top Gun (Wedding)',
    JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Air Groove (Wedding)',
    JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seeking the Pearl (SR guts)',
    JPStartDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Chiyono O (SSR stamina)',
    JPStartDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Brian',
    JPStartDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Super Creek (SSR stamina)',
    JPStartDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tazuna Hayakawa (SSR friend)',
    JPStartDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Smart Falcon',
    JPStartDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Zenno Rob Roy (SR stamina)',
    JPStartDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yaeno Muteki (SSR power)',
    JPStartDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Taishin',
    JPStartDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SR power)',
    JPStartDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yukino Bijin (SSR intelligence)',
    JPStartDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Curren Chan',
    JPStartDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kitasan Black (SSR speed)',
    JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.005
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Satono Diamond (SSR stamina)',
    JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.005
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tokai Teio (Anime Collab)',
    JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.005
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro McQueen (Anime Collab)',
    JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.005
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SR intelligence)',
    JPStartDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Palmer (SSR guts)',
    JPStartDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide',
    JPStartDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daitaku Helios (SR power)',
    JPStartDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Twin Turbo (SSR speed)',
    JPStartDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mihono Bourbon',
    JPStartDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sweep Tosho (SR speed)',
    JPStartDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SSR power)',
    JPStartDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'TM Opera O',
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