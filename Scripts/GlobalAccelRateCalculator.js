/* This function will be used to calculate how much faster global is progressing compared to the JP server.
It will not be used to dynamically set the accel rate and will instead be run periodically, via the console, to check that the accel rate is still mostly accurate. */ 
function CalcGlobalAccelRate() {
    let Start = Date.now();

    let LowerBound = 1;
    let UpperBound = 2;

    let AvgNumer = 0;
    let AvgDenom = 0;

    let CurrBannerStartDate = moment('25 Jun 2025', "DD MMM YYYY").toDate();

    for (let i = 0; i < ItemsInfo.length; i++) {

        let Item = ItemsInfo[i];
        
        if (Object.hasOwn(GlobalDates['Scout'], Item.BannerID)) {
            Item.GlobalStartDate = moment(GlobalDates['Scout'][Item.BannerID][0], "MMM DD YYYY").toDate();
            Item.GlobalEndDate = moment(GlobalDates['Scout'][Item.BannerID][1], "MMM DD YYYY").toDate();
        }
        else if (!Object.hasOwn(Item, 'GlobalStartDate')) {
            continue;
        };

        if (DateDiff(Item.GlobalStartDate, CurrBannerStartDate) != 0) {
            // if (i > 27) {

            // console.log(Item.GlobalStartDate, CurrBannerStartDate, Item.GlobalStartDate == CurrBannerStartDate)
            // console.log(Item.Name)
            CurrBannerStartDate = Item.GlobalStartDate;
            if (CurrBannerStartDate >= moment('1 Sept 2025', "DD MMM YYYY").toDate() ) {


                let Ratio = DateDiff(JPLaunchDate, Item.JPStartDate)/DateDiff(GlobalLaunchDate, Item.GlobalStartDate);

                let JPLaunchBannerStartDateDiff = DateDiff(JPLaunchDate, Item.JPStartDate);
                let GlobalLaunchBannerStartDateDiff = Math.round(JPLaunchBannerStartDateDiff/GlobalAccelRate);
                let EstGlobalDate = DateAdd(GlobalLaunchDate, GlobalLaunchBannerStartDateDiff);

                console.log()
                console.log(EstGlobalDate, Item.GlobalStartDate);
                console.log('Date Diff:', DateDiff(Item.GlobalStartDate, EstGlobalDate));
                console.log(Item.Name)
                // console.log(moment(Item.GlobalStartDate, "YYYY-MM-DD").format('L'));
                // console.log(DateDiff(JPLaunchDate, Item.JPStartDate), DateDiff(GlobalLaunchDate, Item.GlobalStartDate));


                // if (![5].includes(i)) {
                    console.log(Ratio);


                    AvgNumer += DateDiff(JPLaunchDate, Item.JPStartDate)/DateDiff(GlobalLaunchDate, Item.GlobalStartDate);
                    AvgDenom += 1;
            // }
            };
        }
    };

    console.log('Tot', AvgNumer/AvgDenom);
};