Template.StatusReactiveTable.helpers({
   medicationPlanStatus : function () {
       return MedicationPlan.find({'patientId': this._id});
   },
    settings: function () {
        return {
            showFilter: false,
            showNavigation: 'auto',
            showRowCount: false,
            multiColumnSort: false,
            showNavigationRowsPerPage: false,
            fields: [
                {
                    key: 'morning',
                    label: '',
                    tmpl: Template.RealState,
                    sortable: false
                }
            ]
        }
    }
});