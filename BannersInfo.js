const BannerTypes = {
    Uma:  {Value: 1},
    Card: {Value: 2}
};

// Most group/banner names will be filled in dynamically but there are a few we want to manually assign so we will do that here.
const BannerNames = {
  63: '1st Anniversary Rerun',
  163: 'Gal Week',
  226: 'Gochi Week',
  282: 'Gray Week'
};

let ItemsInfo = [
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Believe',
    BannerID: 303,
    JPStartDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Biko Pegasus (SR intelligence)',
    BannerID: 302,
    JPStartDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiichi Ruby (SSR guts)',
    BannerID: 302,
    JPStartDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Espoir City',
    BannerID: 301,
    JPStartDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Calstone Light O (SSR speed)',
    BannerID: 300,
    JPStartDate: moment('28 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Durandal (SSR intelligence)',
    BannerID: 300,
    JPStartDate: moment('28 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'K.S.Miracle (Alt Version)',
    BannerID: 299,
    JPStartDate: moment('28 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Miracle (Alt Version)',
    BannerID: 299,
    JPStartDate: moment('28 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Stay Gold (SSR guts)',
    BannerID: 298,
    JPStartDate: moment('23 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Admire Groove (SSR speed)',
    BannerID: 298,
    JPStartDate: moment('23 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Still in Love',
    BannerID: 297,
    JPStartDate: moment('23 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Sept 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Vivlos (Summer)',
    BannerID: 296,
    JPStartDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Win Variation (SSR intelligence)',
    BannerID: 295,
    JPStartDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Duramente (SSR stamina)',
    BannerID: 295,
    JPStartDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Crown (Summer)',
    BannerID: 294,
    JPStartDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Cheval Grand (Summer)',
    BannerID: 294,
    JPStartDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fusaichi Pandora',
    BannerID: 293,
    JPStartDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kawakami Princess (SR guts)',
    BannerID: 292,
    JPStartDate: moment('10 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ryan (SSR stamina)',
    BannerID: 292,
    JPStartDate: moment('10 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Ines Fujin (Deserted Island)',
    BannerID: 291,
    JPStartDate: moment('10 Jul 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tamamo Cross (SSR power)',
    BannerID: 290,
    JPStartDate: moment('26 Jun 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tucker Bryne (SSR friend)',
    BannerID: 290,
    JPStartDate: moment('26 Jun 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City (Deserted Island)',
    BannerID: 289,
    JPStartDate: moment('26 Jun 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Chrono Genesis',
    BannerID: 288,
    JPStartDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Rhein Kraft (SSR speed)',
    BannerID: 287,
    JPStartDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daring Heart (SSR intelligence)',
    BannerID: 287,
    JPStartDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ramonu (Wedding)',
    BannerID: 286,
    JPStartDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Cesario (Wedding)',
    BannerID: 286,
    JPStartDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Loves Only You',
    BannerID: 285,
    JPStartDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Bouquetd\'or (SR stamina)',
    BannerID: 284,
    JPStartDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Silence Suzuka (SSR guts)',
    BannerID: 284,
    JPStartDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Verxina',
    BannerID: 283,
    JPStartDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Oguri Cap',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001765
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro McQueen',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001765
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001765
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro McQueen (Anime Collab)',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001765
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Curren Chan',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001765
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seiun Sky',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001765
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Oguri Cap (Christmas)',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001765
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide (Christmas)',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001765
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tamamo Cross',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001765
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seiun Sky (Ballroom)',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001765
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Curren Chan (Wedding)',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001765
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro McQueen (Summer)',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001765
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold Ship (Summer)',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001764
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tamamo Cross (Festival)',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001764
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Miracle',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001764
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold Ship (Project L\'Arc)',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001764
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide (Mecha)',
    BannerID: 282,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 May 2025', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.001764
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Transcend (SSR guts)',
    BannerID: 281,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Buena Vista (SSR power)',
    BannerID: 281,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Copano Rickey (Parade)',
    BannerID: 280,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Smart Falcon (Parade)',
    BannerID: 280,
    JPStartDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 May 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fenomeno',
    BannerID: 279,
    JPStartDate: moment('20 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'No Reason',
    BannerID: 278,
    JPStartDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daring Heart (SR power)',
    BannerID: 277,
    JPStartDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daring Tact (SSR intelligence)',
    BannerID: 277,
    JPStartDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sirius Symboli (The Twinkle Legends)',
    BannerID: 276,
    JPStartDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vodka (SSR power)',
    BannerID: 275,
    JPStartDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Dream Journey (SSR speed)',
    BannerID: 275,
    JPStartDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tap Dance City (Ballroom)',
    BannerID: 274,
    JPStartDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tanino Gimlet (Ballroom)',
    BannerID: 274,
    JPStartDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'No Reason',
    BannerID: 273,
    JPStartDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Rice Shower (SR speed)',
    BannerID: 272,
    JPStartDate: moment('10 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Bright (SSR stamina)',
    BannerID: 272,
    JPStartDate: moment('10 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gran Alegria',
    BannerID: 271,
    JPStartDate: moment('10 Mar 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Lucky Lilac (SR intelligence)',
    BannerID: 270,
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.015,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro McQueen (SR guts)',
    BannerID: 270,
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.015,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Embodiment of Legends (SSR group)',
    BannerID: 270,
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Almond Eye (SSR speed)',
    BannerID: 270,
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Orfevre',
    BannerID: 269,
    JPStartDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tsurumaru Tsuyoshi',
    BannerID: 268,
    JPStartDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Chan (SSR guts)',
    BannerID: 267,
    JPStartDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SSR intelligence)',
    BannerID: 267,
    JPStartDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Aston Machan (Valentine)',
    BannerID: 266,
    JPStartDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yamanin Zephyr (Valentine)',
    BannerID: 266,
    JPStartDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Furioso',
    BannerID: 265,
    JPStartDate: moment('19 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ramonu (SR stamina)',
    BannerID: 264,
    JPStartDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seeking the Pearl (SSR speed)',
    BannerID: 264,
    JPStartDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Maruzensky (New Year)',
    BannerID: 263,
    JPStartDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Rudolf (SSR intelligence)',
    BannerID: 262,
    JPStartDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ardan (SSR power)',
    BannerID: 262,
    JPStartDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Katsuragi Ace (New Year)',
    BannerID: 261,
    JPStartDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mr. C.B. (New Year)',
    BannerID: 261,
    JPStartDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2025', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Grass Wonder (New Year)',
    BannerID: 260,
    JPStartDate: moment('18 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('26 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Bubble Gum Fellow (SR speed)',
    BannerID: 259,
    JPStartDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Blast Onepiece (SSR guts)',
    BannerID: 259,
    JPStartDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Win Variation',
    BannerID: 258,
    JPStartDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Digital (SSR intelligence)',
    BannerID: 257,
    JPStartDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Meisho Doto (SSR speed)',
    BannerID: 257,
    JPStartDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Top Road (Christmas)',
    BannerID: 256,
    JPStartDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Admire Vega (Christmas)',
    BannerID: 256,
    JPStartDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Dec 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Air Messiah',
    BannerID: 255,
    JPStartDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'North Flight (SR power)',
    BannerID: 254,
    JPStartDate: moment('7 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Kris S (SSR power)',
    BannerID: 254,
    JPStartDate: moment('7 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Taishin (Mecha)',
    BannerID: 253,
    JPStartDate: moment('7 Nov 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Shakur (SSR stamina)',
    BannerID: 252,
    JPStartDate: moment('28 Oct 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiwa Scarlet (SSR intelligence)',
    BannerID: 252,
    JPStartDate: moment('28 Oct 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide (Mecha)',
    BannerID: 251,
    JPStartDate: moment('28 Oct 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Nov 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Bubble Gum Fellow',
    BannerID: 250,
    JPStartDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Amazon (SSR guts)',
    BannerID: 249,
    JPStartDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Brian (SSR speed)',
    BannerID: 249,
    JPStartDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seeking the Pearl (Halloween)',
    BannerID: 248,
    JPStartDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mayano Top Gun (Halloween)',
    BannerID: 248,
    JPStartDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Durandal',
    BannerID: 247,
    JPStartDate: moment('19 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Laurel (SR intelligence)',
    BannerID: 246,
    JPStartDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Espoir City (SSR power)',
    BannerID: 246,
    JPStartDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Cesario',
    BannerID: 245,
    JPStartDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Taiki Shuttle (SSR intelligence)',
    BannerID: 244,
    JPStartDate: moment('29 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fuji Kiseki (SSR guts)',
    BannerID: 244,
    JPStartDate: moment('29 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Neo Universe (Autumn)',
    BannerID: 243,
    JPStartDate: moment('29 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Zenno Rob Roy (Autumn)',
    BannerID: 243,
    JPStartDate: moment('29 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Marvelous Sunday (SR guts)',
    BannerID: 242,
    JPStartDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Still in Love (SSR speed)',
    BannerID: 242,
    JPStartDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gentildonna',
    BannerID: 241,
    JPStartDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Palmer (SR stamina)',
    BannerID: 240,
    JPStartDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fine Motion (SSR guts)',
    BannerID: 240,
    JPStartDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Smart Falcon (SSR speed)',
    BannerID: 239,
    JPStartDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Copano Rickey (SSR intelligence)',
    BannerID: 239,
    JPStartDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Eishin Flash (Summer Trip)',
    BannerID: 238,
    JPStartDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hokko Tarumae (Summer Trip)',
    BannerID: 238,
    JPStartDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Calstone Light O',
    BannerID: 237,
    JPStartDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanefukukitaru (SR speed)',
    BannerID: 236,
    JPStartDate: moment('8 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Dantsu Flame (SSR stamina)',
    BannerID: 236,
    JPStartDate: moment('8 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rice Shower (Great Food Festival)',
    BannerID: 235,
    JPStartDate: moment('8 Jul 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yayoi Akikawa (SSR friend)',
    BannerID: 234,
    JPStartDate: moment('25 Jun 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SSR power)',
    BannerID: 234,
    JPStartDate: moment('25 Jun 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Dream Journey',
    BannerID: 233,
    JPStartDate: moment('25 Jun 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jul 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Jungle Pocket',
    BannerID: 232,
    JPStartDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('25 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vivlos (SSR speed)',
    BannerID: 231,
    JPStartDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seiun Sky (SSR power)',
    BannerID: 231,
    JPStartDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'King Halo (Wedding)',
    BannerID: 230,
    JPStartDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sweep Tosho (Wedding)',
    BannerID: 230,
    JPStartDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Jun 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'North Flight',
    BannerID: 229,
    JPStartDate: moment('19 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Dantsu Flame (SR intelligence)',
    BannerID: 228,
    JPStartDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vodka (SSR guts)',
    BannerID: 228,
    JPStartDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Agnes Tachyon (Alt Version)',
    BannerID: 227,
    JPStartDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Amazon',
    BannerID: 226,
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.006
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Chiyono O',
    BannerID: 226,
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.006
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Chiyono O (Ballroom)',
    BannerID: 226,
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.006
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Amazon (Wedding)',
    BannerID: 226,
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.006
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Katsuragi Ace',
    BannerID: 226,
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.006
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Miracle (SSR stamina)',
    BannerID: 225,
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Taishin (SSR intelligence)',
    BannerID: 225,
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Super Creek (Warfare)',
    BannerID: 224,
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yaeno Muteki (Warfare)',
    BannerID: 224,
    JPStartDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sounds of Earth',
    BannerID: 223,
    JPStartDate: moment('18 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Shakur (SR power)',
    BannerID: 222,
    JPStartDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Neo Universe (SSR intelligence)',
    BannerID: 222,
    JPStartDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Winning Ticket (U.A.F.)',
    BannerID: 221,
    JPStartDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SSR power)',
    BannerID: 220,
    JPStartDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yamanin Zephyr (SSR speed)',
    BannerID: 220,
    JPStartDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daiichi Ruby (Ballroom)',
    BannerID: 219,
    JPStartDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daitaku Helios (Ballroom)',
    BannerID: 219,
    JPStartDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Apr 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tap Dance City (SR guts)',
    BannerID: 218,
    JPStartDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Cheval Grand (SSR stamina)',
    BannerID: 218,
    JPStartDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rhein Kraft',
    BannerID: 217,
    JPStartDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Transcend',
    BannerID: 216,
    JPStartDate: moment('11 Mar 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tosen Jordan (SR speed)',
    BannerID: 215,
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.015,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yaeno Muteki (SR stamina)',
    BannerID: 215,
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.015,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Orfevre (SSR guts)',
    BannerID: 215,
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ryoka Tsurugi (SSR friend)',
    BannerID: 215,
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Ikuno Dictus',
    BannerID: 214,
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Duramente',
    BannerID: 214,
    JPStartDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Mar 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biko Pegasus',
    BannerID: 213,
    JPStartDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Winning Ticket (SSR power)',
    BannerID: 212,
    JPStartDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Bakushin O (SSR speed)',
    BannerID: 212,
    JPStartDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yukino Bijin (Valentine)',
    BannerID: 211,
    JPStartDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Manhattan Cafe (Valentine)',
    BannerID: 211,
    JPStartDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Feb 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tanino Gimlet (SR intelligence)',
    BannerID: 210,
    JPStartDate: moment('18 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hokko Tarumae (SSR stamina)',
    BannerID: 210,
    JPStartDate: moment('18 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Vivlos',
    BannerID: 209,
    JPStartDate: moment('18 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nice Nature (New Year)',
    BannerID: 208,
    JPStartDate: moment('8 Jan 2024', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Duramente (SSR speed)',
    BannerID: 207,
    JPStartDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Satono Diamond (SSR intelligence)',
    BannerID: 207,
    JPStartDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kitasan Black (Anime Collab)',
    BannerID: 206,
    JPStartDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jan 2024', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Royce and Royce (SR power)',
    BannerID: 205,
    JPStartDate: moment('19 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vivlos (SSR guts)',
    BannerID: 205,
    JPStartDate: moment('19 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Cheval Grand',
    BannerID: 204,
    JPStartDate: moment('19 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Crown',
    BannerID: 203,
    JPStartDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Dober (SSR speed)',
    BannerID: 202,
    JPStartDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ramonu (SSR power)',
    BannerID: 202,
    JPStartDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Palmer (Christmas)',
    BannerID: 201,
    JPStartDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Bright (Christmas)',
    BannerID: 201,
    JPStartDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Dec 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Verxina (SR guts)',
    BannerID: 200,
    JPStartDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sounds of Earth (SSR stamina)',
    BannerID: 200,
    JPStartDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tap Dance City',
    BannerID: 199,
    JPStartDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanetannhauser (SR speed)',
    BannerID: 198,
    JPStartDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro McQueen (SSR intelligence)',
    BannerID: 198,
    JPStartDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tsurumaru Tsuyoshi (SSR power)',
    BannerID: 197,
    JPStartDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'King Halo (SSR guts)',
    BannerID: 197,
    JPStartDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kawakami Princess (Festival)',
    BannerID: 196,
    JPStartDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tokai Teio (Festival)',
    BannerID: 196,
    JPStartDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nice Nature (SR stamina)',
    BannerID: 195,
    JPStartDate: moment('18 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Gold Ship (SSR speed)',
    BannerID: 195,
    JPStartDate: moment('18 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ramonu',
    BannerID: 194,
    JPStartDate: moment('18 Oct 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tanino Gimlet (SSR stamina)',
    BannerID: 193,
    JPStartDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tap Dance City (SSR guts)',
    BannerID: 193,
    JPStartDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Air Shakur (Halloween)',
    BannerID: 192,
    JPStartDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Symboli Kris S (Halloween)',
    BannerID: 192,
    JPStartDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Oct 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Taiki Shuttle (SR intelligence)',
    BannerID: 191,
    JPStartDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Amazon (SSR power)',
    BannerID: 191,
    JPStartDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'K.S.Miracle',
    BannerID: 190,
    JPStartDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Special Week (SSR stamina)',
    BannerID: 189,
    JPStartDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro McQueen (SSR stamina)',
    BannerID: 189,
    JPStartDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Diamond (Project L\'Arc)',
    BannerID: 188,
    JPStartDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kitasan Black (SR stamina)',
    BannerID: 187,
    JPStartDate: moment('30 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nakayama Festa (SSR intelligence)',
    BannerID: 187,
    JPStartDate: moment('30 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold Ship (Project L\'Arc)',
    BannerID: 186,
    JPStartDate: moment('30 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mei Satake (SSR friend)',
    BannerID: 185,
    JPStartDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'El Condor Pasa (SSR speed)',
    BannerID: 185,
    JPStartDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Top Road',
    BannerID: 184,
    JPStartDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Sept 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SSR speed)',
    BannerID: 183,
    JPStartDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ramonu (SSR intelligence)',
    BannerID: 183,
    JPStartDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Copano Rickey',
    BannerID: 182,
    JPStartDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hokko Tarumae',
    BannerID: 182,
    JPStartDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Manhattan Cafe (SSR intelligence)',
    BannerID: 181,
    JPStartDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Jungle Pocket (SSR guts)',
    BannerID: 181,
    JPStartDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Agnes Tachyon (Summer)',
    BannerID: 180,
    JPStartDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Silence Suzuka (Summer)',
    BannerID: 180,
    JPStartDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Aug 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Grass Wonder (SR power)',
    BannerID: 179,
    JPStartDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Wonder Acute (SSR power)',
    BannerID: 179,
    JPStartDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sirius Symboli',
    BannerID: 178,
    JPStartDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Twin Turbo (SSR guts)',
    BannerID: 177,
    JPStartDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiichi Ruby (SSR power)',
    BannerID: 177,
    JPStartDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Katsuragi Ace',
    BannerID: 176,
    JPStartDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('20 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Gold City (SSR guts)',
    BannerID: 175,
    JPStartDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Palmer (SSR speed)',
    BannerID: 175,
    JPStartDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Bamboo Memory (Summer Trip)',
    BannerID: 174,
    JPStartDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tosen Jordan (Summer Trip)',
    BannerID: 174,
    JPStartDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jul 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Copano Rickey (SR guts)',
    BannerID: 173,
    JPStartDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mayano Top Gun (SSR power)',
    BannerID: 173,
    JPStartDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Marvelous Sunday',
    BannerID: 172,
    JPStartDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Silence Suzuka (SR speed)',
    BannerID: 171,
    JPStartDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'TM Opera O (SSR intelligence)',
    BannerID: 171,
    JPStartDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Taiki Shuttle (Camping)',
    BannerID: 170,
    JPStartDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yamanin Zephyr',
    BannerID: 170,
    JPStartDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiwa Scarlet (SSR guts)',
    BannerID: 169,
    JPStartDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Aston Machan (SSR intelligence)',
    BannerID: 169,
    JPStartDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nishino Flower (Wedding)',
    BannerID: 168,
    JPStartDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Amazon (Wedding)',
    BannerID: 168,
    JPStartDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Jun 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SR intelligence)',
    BannerID: 167,
    JPStartDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Jungle Pocket (SSR speed)',
    BannerID: 167,
    JPStartDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tanino Gimlet',
    BannerID: 166,
    JPStartDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yamanin Zephyr (SSR guts)',
    BannerID: 165,
    JPStartDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SSR guts)',
    BannerID: 165,
    JPStartDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Miracle',
    BannerID: 164,
    JPStartDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City',
    BannerID: 163,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tosen Jordan',
    BannerID: 163,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Palmer',
    BannerID: 163,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daitaku Helios',
    BannerID: 163,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mihono Bourbon (SSR intelligence)',
    BannerID: 162,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Laurel (SSR stamina)',
    BannerID: 162,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Matikanetannhauser (Sports Festival)',
    BannerID: 161,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Bakushin O (Sports Festival)',
    BannerID: 161,
    JPStartDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Gold Ship (SR stamina)',
    BannerID: 160,
    JPStartDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Rudolf (SSR guts)',
    BannerID: 160,
    JPStartDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Neo Universe',
    BannerID: 159,
    JPStartDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Eishin Flash (SSR speed)',
    BannerID: 158,
    JPStartDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Groove (SSR intelligence)',
    BannerID: 158,
    JPStartDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Laurel',
    BannerID: 157,
    JPStartDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nice Nature (SSR power)',
    BannerID: 156,
    JPStartDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro McQueen (SSR stamina)',
    BannerID: 156,
    JPStartDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ardan (Ballroom)',
    BannerID: 155,
    JPStartDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Chiyono O (Ballroom)',
    BannerID: 155,
    JPStartDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Apr 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Akebono (SR power)',
    BannerID: 154,
    JPStartDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ancestors & Guides (SSR group)',
    BannerID: 154,
    JPStartDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Symboli Kris S',
    BannerID: 153,
    JPStartDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sirius Symboli (SSR intelligence)',
    BannerID: 152,
    JPStartDate: moment('9 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SSR intelligence)',
    BannerID: 152,
    JPStartDate: moment('9 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daiichi Ruby',
    BannerID: 151,
    JPStartDate: moment('9 Mar 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Jungle Pocket (SR speed)',
    BannerID: 150,
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Dober (SR guts)',
    BannerID: 150,
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Rudolf (SR stamina)',
    BannerID: 150,
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Tachyon (SR power)',
    BannerID: 150,
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ramonu (SSR intelligence)',
    BannerID: 150,
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Twin Turbo',
    BannerID: 149,
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.1,
    Disabled: true
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mr. C.B.',
    BannerID: 149,
    JPStartDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Mar 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SSR intelligence)',
    BannerID: 148,
    JPStartDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SSR speed)',
    BannerID: 148,
    JPStartDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Shinko Windy',
    BannerID: 147,
    JPStartDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Marvelous Sunday (SSR speed)',
    BannerID: 146,
    JPStartDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Biko Pegasus (SSR power)',
    BannerID: 146,
    JPStartDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Ines Fujin (Valentine)',
    BannerID: 145,
    JPStartDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ryan (Valentine)',
    BannerID: 145,
    JPStartDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('12 Feb 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanefukukitaru (SSR speed)',
    BannerID: 144,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Taiki Shuttle (SSR speed)',
    BannerID: 144,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rice Shower (Halloween)',
    BannerID: 143,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Haru Urara (New Year)',
    BannerID: 143,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Aston Machan (SR speed)',
    BannerID: 142,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SSR guts)',
    BannerID: 142,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daitaku Helios',
    BannerID: 141,
    JPStartDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Tachyon (SSR speed)',
    BannerID: 140,
    JPStartDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tokai Teio (SSR intelligence)',
    BannerID: 140,
    JPStartDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hokko Tarumae',
    BannerID: 139,
    JPStartDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Special Week (SSR stamina)',
    BannerID: 138,
    JPStartDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sweep Tosho (SSR intelligence)',
    BannerID: 138,
    JPStartDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kitasan Black (New Year)',
    BannerID: 137,
    JPStartDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Diamond (New Year)',
    BannerID: 137,
    JPStartDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jan 2023', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'TM Opera O (SR stamina)',
    BannerID: 136,
    JPStartDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yamanin Zephyr (SSR guts)',
    BannerID: 136,
    JPStartDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Brian (Blaze)',
    BannerID: 135,
    JPStartDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mayano Top Gun (SSR speed)',
    BannerID: 134,
    JPStartDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Light Hello (SSR friend)',
    BannerID: 134,
    JPStartDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Zenno Rob Roy',
    BannerID: 133,
    JPStartDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Brian (SSR power)',
    BannerID: 132,
    JPStartDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Groove (SSR intelligence)',
    BannerID: 132,
    JPStartDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Vodka (Christmas)',
    BannerID: 131,
    JPStartDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Daiwa Scarlet (Christmas)',
    BannerID: 131,
    JPStartDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Dec 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Top Road (SR power)',
    BannerID: 130,
    JPStartDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Eishin Flash (SSR speed)',
    BannerID: 130,
    JPStartDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Wonder Acute',
    BannerID: 129,
    JPStartDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Super Creek (SSR stamina)',
    BannerID: 128,
    JPStartDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mr. C.B. (SSR intelligence)',
    BannerID: 128,
    JPStartDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nakayama Festa',
    BannerID: 127,
    JPStartDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SSR intelligence)',
    BannerID: 126,
    JPStartDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yaeno Muteki (SSR guts)',
    BannerID: 126,
    JPStartDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tamamo Cross (Festival)',
    BannerID: 125,
    JPStartDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Inari One (Festival)',
    BannerID: 125,
    JPStartDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Nov 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tsurumaru Tsuyoshi (SR guts)',
    BannerID: 124,
    JPStartDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Kris S (SSR stamina)',
    BannerID: 124,
    JPStartDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yamanin Zephyr',
    BannerID: 123,
    JPStartDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SR guts)',
    BannerID: 122,
    JPStartDate: moment('16 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiichi Ruby (SSR power)',
    BannerID: 122,
    JPStartDate: moment('16 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seeking the Pearl',
    BannerID: 121,
    JPStartDate: moment('16 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fine Motion (SSR intelligence)',
    BannerID: 120,
    JPStartDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SSR speed)',
    BannerID: 120,
    JPStartDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Aston Machan',
    BannerID: 119,
    JPStartDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Palmer (SSR stamina)',
    BannerID: 118,
    JPStartDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daitaku Helios (SSR speed)',
    BannerID: 118,
    JPStartDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Agnes Digital (Halloween)',
    BannerID: 117,
    JPStartDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Meisho Doto (Halloween)',
    BannerID: 117,
    JPStartDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'K.S.Miracle (SR guts)',
    BannerID: 116,
    JPStartDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiichi Ruby (SSR power)',
    BannerID: 116,
    JPStartDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seeking the Pearl',
    BannerID: 115,
    JPStartDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Silence Suzuka (SSR speed)',
    BannerID: 114,
    JPStartDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Smart Falcon (SSR power)',
    BannerID: 114,
    JPStartDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yukino Bijin',
    BannerID: 113,
    JPStartDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tokai Teio (SSR intelligence)',
    BannerID: 112,
    JPStartDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Twin Turbo (SSR guts)',
    BannerID: 112,
    JPStartDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Winning Ticket (Steampunk)',
    BannerID: 111,
    JPStartDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Taishin (Steampunk)',
    BannerID: 111,
    JPStartDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Light Hello (SSR friend)',
    BannerID: 110,
    JPStartDate: moment('23 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Tachyon (SSR speed)',
    BannerID: 110,
    JPStartDate: moment('23 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Smart Falcon (Grand Live)',
    BannerID: 109,
    JPStartDate: moment('23 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('11 Sept 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seiun Sky (SR intelligence)',
    BannerID: 108,
    JPStartDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Manhattan Cafe (SSR stamina)',
    BannerID: 108,
    JPStartDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Copano Rickey',
    BannerID: 107,
    JPStartDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yukino Bijin (SSR intelligence)',
    BannerID: 106,
    JPStartDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SSR guts)',
    BannerID: 106,
    JPStartDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Bamboo Memory',
    BannerID: 105,
    JPStartDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Maruzensky (SSR speed)',
    BannerID: 104,
    JPStartDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nakayama Festa (SSR intelligence)',
    BannerID: 104,
    JPStartDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro McQueen (Summer)',
    BannerID: 103,
    JPStartDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold Ship (Summer)',
    BannerID: 103,
    JPStartDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Aug 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'El Condor Pasa (SR speed)',
    BannerID: 102,
    JPStartDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'The Throne\'s Assemblage (SSR group)',
    BannerID: 102,
    JPStartDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Brian',
    BannerID: 101,
    JPStartDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seiun Sky',
    BannerID: 101,
    JPStartDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Gold City (SR intelligence)',
    BannerID: 100,
    JPStartDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Air Groove (SSR power)',
    BannerID: 100,
    JPStartDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Air Shakur',
    BannerID: 99,
    JPStartDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'El Condor Pasa (SSR guts)',
    BannerID: 98,
    JPStartDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanetannhauser (SSR intelligence)',
    BannerID: 98,
    JPStartDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Taiki Shuttle (Camping)',
    BannerID: 97,
    JPStartDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Dober (Camping)',
    BannerID: 97,
    JPStartDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jul 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SR guts)',
    BannerID: 96,
    JPStartDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Taiki Shuttle (SSR speed)',
    BannerID: 96,
    JPStartDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sweep Tosho',
    BannerID: 95,
    JPStartDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Chiyono O (SSR stamina)',
    BannerID: 94,
    JPStartDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Admire Vega (SSR power)',
    BannerID: 94,
    JPStartDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Inari One',
    BannerID: 93,
    JPStartDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Haru Urara (SSR power)',
    BannerID: 92,
    JPStartDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SSR stamina)',
    BannerID: 92,
    JPStartDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Curren Chan (Wedding)',
    BannerID: 91,
    JPStartDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fine Motion (Wedding)',
    BannerID: 91,
    JPStartDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Rice Shower (SSR power)',
    BannerID: 90,
    JPStartDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanefukukitaru (SSR speed)',
    BannerID: 90,
    JPStartDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Palmer',
    BannerID: 89,
    JPStartDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tokai Teio (SR stamina)',
    BannerID: 88,
    JPStartDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mr. C.B. (SSR intelligence)',
    BannerID: 88,
    JPStartDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Ines Fujin',
    BannerID: 87,
    JPStartDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Bamboo Memory (SSR guts)',
    BannerID: 86,
    JPStartDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seeking the Pearl (SSR speed)',
    BannerID: 86,
    JPStartDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nice Nature (Cheerleader)',
    BannerID: 85,
    JPStartDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'King Halo (Cheerleader)',
    BannerID: 85,
    JPStartDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 May 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ines Fujin (SSR guts)',
    BannerID: 84,
    JPStartDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Twin Turbo (SSR speed)',
    BannerID: 84,
    JPStartDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Yaeno Muteki',
    BannerID: 83,
    JPStartDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sweep Tosho (SR intelligence)',
    BannerID: 82,
    JPStartDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daiwa Scarlet (SSR power)',
    BannerID: 82,
    JPStartDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Nishino Flower',
    BannerID: 81,
    JPStartDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Symboli Rudolf (SSR stamina)',
    BannerID: 80,
    JPStartDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sirius Symboli (SSR intelligence)',
    BannerID: 80,
    JPStartDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seiun Sky (Ballroom)',
    BannerID: 79,
    JPStartDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fuji Kiseki (Ballroom)',
    BannerID: 79,
    JPStartDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Apr 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Zenno Rob Roy (SSR speed)',
    BannerID: 78,
    JPStartDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Chan (SSR intelligence)',
    BannerID: 78,
    JPStartDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Bright',
    BannerID: 77,
    JPStartDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Chan (SR speed)',
    BannerID: 76,
    JPStartDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Marvelous Sunday (SSR guts)',
    BannerID: 76,
    JPStartDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Satono Diamond',
    BannerID: 75,
    JPStartDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ryan (SR stamina)',
    BannerID: 74,
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.01,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Admire Vega (SR guts)',
    BannerID: 74,
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.01,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Bakushin O (SR power)',
    BannerID: 74,
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.01,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Top Road (SSR speed)',
    BannerID: 74,
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Matikanetannhauser',
    BannerID: 73,
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kitasan Black',
    BannerID: 73,
    JPStartDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('6 Mar 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fine Motion (SSR intelligence)',
    BannerID: 72,
    JPStartDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kawakami Princess (SSR speed)',
    BannerID: 72,
    JPStartDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Admire Vega',
    BannerID: 71,
    JPStartDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('23 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ines Fujin (SR intelligence)',
    BannerID: 70,
    JPStartDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Agnes Digital (SSR power)',
    BannerID: 70,
    JPStartDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Ardan',
    BannerID: 69,
    JPStartDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('15 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SSR intelligence)',
    BannerID: 68,
    JPStartDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Bakushin O (SSR guts)',
    BannerID: 68,
    JPStartDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mihono Bourbon (Valentine)',
    BannerID: 67,
    JPStartDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Eishin Flash (Valentine)',
    BannerID: 67,
    JPStartDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Feb 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tazuna Hayakawa (SSR friend)',
    BannerID: 66,
    JPStartDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Riko Kashimoto (SSR friend)',
    BannerID: 66,
    JPStartDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Sakura Chiyono O',
    BannerID: 65,
    JPStartDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tamamo Cross (SR guts)',
    BannerID: 64,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sasami Anshinzawa (SSR friend)',
    BannerID: 64,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Special Week',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Silence Suzuka',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tokai Teio',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Maruzensky',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Oguri Cap',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Taiki Shuttle',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro McQueen',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'TM Opera O',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Symboli Rudolf',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rice Shower',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mihono Bourbon',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tokai Teio (Anime Collab)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro McQueen (Anime Collab)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000639
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Curren Chan',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Taishin',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Smart Falcon',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Brian',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mayano Top Gun (Wedding)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Air Groove (Wedding)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Seiun Sky',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Amazon',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'El Condor Pasa (Fantasy)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Grass Wonder (Fantasy)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fuji Kiseki',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Special Week (Summer)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Maruzensky (Summer)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Meisho Doto',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Eishin Flash',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Matikanefukukitaru (Full Armor)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Akebono',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Agnes Digital',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rice Shower (Halloween)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Super Creek (Halloween)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kawakami Princess',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Manhattan Cafe',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Symboli Rudolf (Festival)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City (Festival)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tosen Jordan',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Dober',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Oguri Cap (Christmas)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide (Christmas)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fine Motion',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tamamo Cross',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Haru Urara (New Year)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'TM Opera O (New Year)',
    BannerID: 63,
    JPStartDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: false, 
    Rate: 0.000638
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Admire Vega (SSR power)',
    BannerID: 62,
    JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Matikanefukukitaru (SSR speed)',
    BannerID: 62,
    JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Haru Urara (New Year)',
    BannerID: 61,
    JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'TM Opera O (New Year)',
    BannerID: 61,
    JPStartDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Jan 2022', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SSR power)',
    BannerID: 60,
    JPStartDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nice Nature (SSR intelligence)',
    BannerID: 60,
    JPStartDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tamamo Cross',
    BannerID: 59,
    JPStartDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('30 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Inari One (SR power)',
    BannerID: 58,
    JPStartDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Manhattan Cafe (SSR stamina)',
    BannerID: 58,
    JPStartDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fine Motion',
    BannerID: 57,
    JPStartDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('21 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mayano Top Gun (SSR speed)',
    BannerID: 56,
    JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Taishin (SSR intelligence)',
    BannerID: 56,
    JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Oguri Cap (Christmas)',
    BannerID: 55,
    JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide (Christmas)',
    BannerID: 55,
    JPStartDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('13 Dec 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vodka (SR speed)',
    BannerID: 54,
    JPStartDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true,

    GlobalStartDate: moment('28 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('7 Jan 2026', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daitaku Helios (SSR power)',
    BannerID: 54,
    JPStartDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('28 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('7 Jan 2026', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro Dober',
    BannerID: 53,
    JPStartDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('28 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('7 Jan 2026', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'El Condor Pasa (SSR power)',
    BannerID: 52,
    JPStartDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075,

    GlobalStartDate: moment('18 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('29 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kitasan Black (SSR speed)',
    BannerID: 52,
    JPStartDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075,

    GlobalStartDate: moment('18 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('29 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tosen Jordan',
    BannerID: 51,
    JPStartDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('18 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('18 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('29 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Curren Chan (SSR intelligence)',
    BannerID: 50,
    JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('14 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('25 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Narita Brian (SSR stamina)',
    BannerID: 50,
    JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('14 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('25 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Symboli Rudolf (Festival)',
    BannerID: 49,
    JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('14 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('25 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City (Festival)',
    BannerID: 49,
    JPStartDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('7 Nov 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('14 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('25 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sirius Symboli (SR guts)',
    BannerID: 48,
    JPStartDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true,

    GlobalStartDate: moment('8 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('16 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nakayama Festa (SSR stamina)',
    BannerID: 48,
    JPStartDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('8 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('16 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Manhattan Cafe',
    BannerID: 47,
    JPStartDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('8 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('16 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seiun Sky (SSR stamina)',
    BannerID: 46,
    JPStartDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075,

    GlobalStartDate: moment('1 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('10 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yaeno Muteki (SSR power)',
    BannerID: 46,
    JPStartDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075,

    GlobalStartDate: moment('1 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('10 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Kawakami Princess',
    BannerID: 45,
    JPStartDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('1 Dec 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('10 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tamamo Cross (SSR power)',
    BannerID: 44,
    JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('24 Nov 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('6 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Zenno Rob Roy (SSR speed)',
    BannerID: 44,
    JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('24 Nov 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('6 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Rice Shower (Halloween)',
    BannerID: 43,
    JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('24 Nov 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('6 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Super Creek (Halloween)',
    BannerID: 43,
    JPStartDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Oct 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('24 Nov 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('6 Dec 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Fine Motion (SR power)',
    BannerID: 42,
    JPStartDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true,

    GlobalStartDate: moment('19 Nov 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('28 Nov 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SSR guts)',
    BannerID: 42,
    JPStartDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('19 Nov 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('28 Nov 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Agnes Digital',
    BannerID: 41,
    JPStartDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('19 Nov 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('28 Nov 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Bakushin O (SSR speed)',
    BannerID: 40,
    JPStartDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075,

    GlobalStartDate: moment('11 Nov 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('21 Nov 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Biko Pegasus (SSR speed)',
    BannerID: 40,
    JPStartDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075,

    GlobalStartDate: moment('11 Nov 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('21 Nov 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Hishi Akebono',
    BannerID: 39,
    JPStartDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('11 Nov 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('21 Nov 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Rice Shower (SSR power)',
    BannerID: 38,
    JPStartDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('6 Nov 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('17 Nov 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Riko Kashimoto (SSR friend)',
    BannerID: 38,
    JPStartDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('6 Nov 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('17 Nov 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Matikanefukukitaru (Full Armor)',
    BannerID: 37,
    JPStartDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Sept 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('6 Nov 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('17 Nov 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tosen Jordan (SR stamina)',
    BannerID: 36,
    JPStartDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true,

    GlobalStartDate: moment('30 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('9 Nov 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nice Nature (SSR intelligence)',
    BannerID: 36,
    JPStartDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('30 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('9 Nov 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Eishin Flash',
    BannerID: 35,
    JPStartDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('30 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('9 Nov 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Special Week (SSR guts)',
    BannerID: 34,
    JPStartDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075,

    GlobalStartDate: moment('21 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('30 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tokai Teio (SSR speed)',
    BannerID: 34,
    JPStartDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075,

    GlobalStartDate: moment('21 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('30 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Meisho Doto',
    BannerID: 33,
    JPStartDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('21 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('30 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sweep Tosho (SSR speed)',
    BannerID: 32,
    JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('14 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('27 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Winning Ticket (SSR stamina)',
    BannerID: 32,
    JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('14 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('27 Oct 2025', "DD MMM YYYY").toDate()  
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Special Week (Summer)',
    BannerID: 31,
    JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('14 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('27 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Maruzensky (Summer)',
    BannerID: 31,
    JPStartDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('10 Aug 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('14 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('27 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Vodka (SSR power)',
    BannerID: 30,
    JPStartDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075,

    GlobalStartDate: moment('7 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('16 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SSR speed)',
    BannerID: 30,
    JPStartDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075,

    GlobalStartDate: moment('7 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('16 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Gold City',
    BannerID: 29,
    JPStartDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('28 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('7 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('16 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ardan (SR intelligence)',
    BannerID: 28,
    JPStartDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true,

    GlobalStartDate: moment('2 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('10 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Ryan (SSR guts)',
    BannerID: 28,
    JPStartDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('2 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('10 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Fuji Kiseki',
    BannerID: 27,
    JPStartDate: moment('11 Jul 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('19 Jul 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('2 Oct 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('10 Oct 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seiun Sky (SSR intelligence)',
    BannerID: 26,
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
    BannerID: 26,
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
    BannerID: 25,
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
    BannerID: 25,
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
    BannerID: 24,
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
    BannerID: 24,
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
    BannerID: 23,
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
    BannerID: 22,
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
    BannerID: 22,
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
    BannerID: 21,
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
    BannerID: 20,
    JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Hishi Akebono (SSR guts)',
    BannerID: 20,
    JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mayano Top Gun (Wedding)',
    BannerID: 19,
    JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Air Groove (Wedding)',
    BannerID: 19,
    JPStartDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('9 Jun 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('28 Aug 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('10 Sept 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Seeking the Pearl (SR guts)',
    BannerID: 18,
    JPStartDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sakura Chiyono O (SSR stamina)',
    BannerID: 18,
    JPStartDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Brian',
    BannerID: 17,
    JPStartDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('27 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('20 Aug 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('31 Aug 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Super Creek (SSR stamina)',
    BannerID: 16,
    JPStartDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Tazuna Hayakawa (SSR friend)',
    BannerID: 16,
    JPStartDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    IsNew: false,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Smart Falcon',
    BannerID: 15,
    JPStartDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('16 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('11 Aug 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('22 Aug 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Zenno Rob Roy (SR stamina)',
    BannerID: 14,
    JPStartDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yaeno Muteki (SSR power)',
    BannerID: 14,
    JPStartDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Narita Taishin',
    BannerID: 13,
    JPStartDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('5 May 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('3 Aug 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('13 Aug 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Nishino Flower (SR power)',
    BannerID: 12,
    JPStartDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Yukino Bijin (SSR intelligence)',
    BannerID: 12,
    JPStartDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Curren Chan',
    BannerID: 11,
    JPStartDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('25 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('27 Jul 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('7 Aug 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Kitasan Black (SSR speed)',
    BannerID: 10,
    JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.005
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Satono Diamond (SSR stamina)',
    BannerID: 10,
    JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.005
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Tokai Teio (Anime Collab)',
    BannerID: 9,
    JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.005
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mejiro McQueen (Anime Collab)',
    BannerID: 9,
    JPStartDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('14 Apr 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.005,

    GlobalStartDate: moment('16 Jul 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('1 Aug 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Ikuno Dictus (SR intelligence)',
    BannerID: 8,
    JPStartDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Mejiro Palmer (SSR guts)',
    BannerID: 8,
    JPStartDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Biwa Hayahide',
    BannerID: 7,
    JPStartDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('29 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('10 Jul 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('22 Jul 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Daitaku Helios (SR power)',
    BannerID: 6,
    JPStartDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Twin Turbo (SSR speed)',
    BannerID: 6,
    JPStartDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('2 Jul 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('10 Jul 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Mihono Bourbon',
    BannerID: 5,
    JPStartDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('17 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075,

    GlobalStartDate: moment('2 Jul 2025', "DD MMM YYYY").toDate(),
    GlobalEndDate: moment('10 Jul 2025', "DD MMM YYYY").toDate()
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Sweep Tosho (SR speed)',
    BannerID: 4,
    JPStartDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0225,
    Disabled: true
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Oguri Cap (SSR power)',
    BannerID: 4,
    JPStartDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'TM Opera O',
    BannerID: 3,
    JPStartDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('8 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0075
  },
  {
    Type: BannerTypes['Card'].Value,
    Name: 'Support Card Launch Banner',
    BannerID: 2,
    JPStartDate: moment('23 Feb 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.0015,
    Disabled: true
  },
  {
    Type: BannerTypes['Uma'].Value,
    Name: 'Trainee Launch Banner',
    BannerID: 1,
    JPStartDate: moment('23 Feb 2021', "DD MMM YYYY").toDate(),
    JPEndDate: moment('1 Mar 2021', "DD MMM YYYY").toDate(),
    IsNew: true,
    Rate: 0.003334,
    Disabled: true
  }
].reverse();