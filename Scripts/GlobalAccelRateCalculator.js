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
        if (Object.hasOwn(ItemsInfo[i], 'GlobalStartDate')) {
            // console.log(DateDiff(ItemsInfo[i].GlobalStartDate, CurrBannerStartDate));
            if (DateDiff(ItemsInfo[i].GlobalStartDate, CurrBannerStartDate) != 0) {

                // console.log(ItemsInfo[i].GlobalStartDate, CurrBannerStartDate, ItemsInfo[i].GlobalStartDate == CurrBannerStartDate)
                // console.log(ItemsInfo[i].Name)
                CurrBannerStartDate = ItemsInfo[i].GlobalStartDate

                let Ratio = DateDiff(JPLaunchDate, ItemsInfo[i].JPStartDate)/DateDiff(GlobalLaunchDate, ItemsInfo[i].GlobalStartDate);

                let JPLaunchBannerStartDateDiff = DateDiff(JPLaunchDate, ItemsInfo[i].JPStartDate);
                let GlobalLaunchBannerStartDateDiff = Math.round(JPLaunchBannerStartDateDiff/GlobalAccelRate);
                let JPStartDate = DateAdd(GlobalLaunchDate, GlobalLaunchBannerStartDateDiff);

                console.log()
                console.log(JPStartDate, ItemsInfo[i].GlobalStartDate);
                console.log(DateDiff(JPStartDate, ItemsInfo[i].GlobalStartDate));
                console.log(ItemsInfo[i].Name)
                console.log(moment(ItemsInfo[i].GlobalStartDate, "YYYY-MM-DD").format('L'));
                console.log(DateDiff(JPLaunchDate, ItemsInfo[i].JPStartDate), DateDiff(GlobalLaunchDate, ItemsInfo[i].GlobalStartDate));


                // if (![5].includes(i)) {
                // if (i > 27) {
                    console.log(Ratio);


                    AvgNumer += DateDiff(JPLaunchDate, ItemsInfo[i].JPStartDate)/DateDiff(GlobalLaunchDate, ItemsInfo[i].GlobalStartDate);
                    AvgDenom += 1;
                // }
            }
        };
    };

    console.log('Tot', AvgNumer/AvgDenom);
};