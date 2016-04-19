Template.editPatientMedPlanModal.helpers({
    selectForm: function (optionText) {
        var formSelection = Session.get('formSelection');
        if (optionText === formSelection) {
            return 'selected'
        }
    },
    selectQuantityMorning: function (optionText) {
        var quantityMorningSelection = Session.get('quantityMorningSelection');
        if (optionText === quantityMorningSelection) {
            return 'selected'
        }
    },
    selectQuantityMidday: function (optionText) {
        var quantityMiddaySelection = Session.get('quantityMiddaySelection');
        if (optionText === quantityMiddaySelection) {
            return 'selected'
        }
    },
    selectQuantityEvening: function (optionText) {
        var quantityEveningSelection = Session.get('quantityEveningSelection');
        if (optionText === quantityEveningSelection) {
            return 'selected'
        }
    },
    selectQuantityNight: function (optionText) {
        var quantityNightSelection = Session.get('quantityNightSelection');
        if (optionText === quantityNightSelection) {
            return 'selected'
        }
    },
});