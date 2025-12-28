function SortScoutPlanningTable() {
    let TableRowSortingArray = [];

    $('tr[data-scoutplan-rowid]').each(function() {
        let BannerID = $(this).find('.ScoutPlanBanner').attr('data-banner-id');

        TableRowSortingArray.push({
          RowID: $(this).attr('data-scoutplan-rowid'),
          BannerType: BannersInfo[BannerID].Type,
          StartDate: BannersInfo[BannerID].StartDate
        });
    });

    TableRowSortingArray.sort((a, b) => {
      let DateCompare = a.StartDate - b.StartDate;
      let TypeCompare = a.BannerType - b.BannerType;
      
      return DateCompare || TypeCompare;
    });

    for (let i = 0; i < TableRowSortingArray.length; i++) {
        $(`tr[data-scoutplan-rowid="${TableRowSortingArray[i].RowID}"]`).appendTo($("#ScoutPlanningTableBody"));
    };

    // TODO: Figure out how to trigger the sortable update event so we don't have to duplicate code.
    ValidateScoutPlanningTable();
    UnsavedChanges = true;
};