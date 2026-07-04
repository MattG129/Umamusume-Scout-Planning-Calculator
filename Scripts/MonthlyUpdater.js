// This is a tool to help with the monthly update process.
// It will read a string for the monthly schedule, generated via image to text, and create banner to global date mappings.
function GenerateNewMonthMapping(Schedule) {
	let arrSchedule = Schedule.split('\n');

	let Dates = {
		'Scout': [],
		'Event': [],
		'CM' : 	 [],
	};

	for (let i = 2; i < arrSchedule.length; i+=2) {
		let StartDate, EndDate;

		if (arrSchedule[i].length == 42) {
			StartDate = arrSchedule[i].substring(12, 17);
			EndDate = arrSchedule[i].substring(31, 36);
		}
		else if (arrSchedule[i].length == 43 && arrSchedule[i].indexOf('-') == 18) {
			StartDate = arrSchedule[i].substring(12, 17);
			EndDate = arrSchedule[i].substring(31, 37);
		}
		else if (arrSchedule[i].length == 43 && arrSchedule[i].indexOf('-') == 19) {
			StartDate = arrSchedule[i].substring(12, 18);
			EndDate = arrSchedule[i].substring(32, 37);
		}
		else if (arrSchedule[i].length == 44) {
			StartDate = arrSchedule[i].substring(12, 18);
			EndDate = arrSchedule[i].substring(32, 38);
		};

		if (StartDate.substring(0, 3) == 'Jan' && Today.getMonth() != 1) {
			StartDate += ` ${Today.getFullYear() + 1}`
			EndDate += ` ${Today.getFullYear() + 1}`
		}
		else {
			StartDate += ` ${Today.getFullYear()}`
			EndDate += ` ${Today.getFullYear()}`
		};

		Dates[arrSchedule[i-1]].push([StartDate, EndDate])	
	};

	let StartingItemIndex = 191; // First item without manually added global dates.
	for (let i = 0; i < Dates['Scout'].length; i++) {		

		let JPStartDate;
		for (let j = StartingItemIndex; j < ItemsInfo.length; j++) {
			let Item = ItemsInfo[j];

			if (
				!Object.hasOwn(GlobalDates['Scout'], Item.BannerID)
				&& (JPStartDate === undefined || DateDiff(Item.JPStartDate, JPStartDate) == 0)
			) {
				if (JPStartDate === undefined) {
					JPStartDate = Item.JPStartDate;
					StartingItemIndex = j;
				};

				GlobalDates['Scout'][Item.BannerID] = [ Dates['Scout'][i][0], Dates['Scout'][i][1] ]
			};
		};
	};

	for (const [key] of Object.entries(Dates)) {
		if (key != 'Scout') {
			let StartingIndex = 15 // Index 15 is, coincidentally, the first event and CM that we are using the monthly updater for.

			for (let i = 0; i < Dates[key].length; i++) {
				for (let j = StartingIndex; j < (key == 'Event' ? StoryEvents.length : ChampionsMeetings.length); j++) {
					if (!Object.hasOwn(GlobalDates[key], j)) {
						GlobalDates[key][j] = Dates[key][i][key == 'Event' ? 0 : 1]; /*Events care about start date, CMs care about end date.*/
						StartingIndex = j;
						break;
					};
				};
			};
		};
	};

	console.log(JSON.stringify(GlobalDates, null, 2));
};