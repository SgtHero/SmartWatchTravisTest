Template.editPatientMedPlanModal.helpers({
    medication: function () {
        var medicationId = Session.get('medicationId');

        if (typeof medicationId !== "undefined") {
            var medication = MedicationPlan.findOne(medicationId);
            var form = medication.form;
            var quantityMorning = medication.morning;
            var quantityMidday = medication.midday;
            var quantityEvening = medication.evening;
            var quantityNight = medication.night;
            Session.set('formSelection', form);
            Session.set('quantityMorningSelection', quantityMorning);
            Session.set('quantityMiddaySelection', quantityMidday);
            Session.set('quantityEveningSelection', quantityEvening);
            Session.set('quantityNightSelection', quantityNight);

            return medication;
        } else {
            return {
                firstName: '',
                tradingName: '',
                dose: '',
                form: '',
                morning: '',
                midday: '',
                evening: '',
                night: '',
                takingNote: '',
                reason: '',
                untilTaking: '',
                houseDoctor: '',
                specialDoctor: '',
                selfMedication: '',
                patientId: ''
            }
        }
    }
});
