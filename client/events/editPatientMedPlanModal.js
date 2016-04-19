Template.editPatientMedPlanModal.events({
  "click #edit": function(event) {
    event.preventDefault();
    var activeSubstance = $('[name="ActiveSubstanceEdit"]').val();
    var tradingName = $('[name="TradingNameEdit"]').val();
    var dose = $('[name="DoseEdit"]').val();
    var form = $('[name="FormEdit"]').val();
    var morning = $('[name="QuantityMorningEdit"]').val();
    var midday = $('[name="QuantityMiddayEdit"]').val();
    var evening = $('[name="QuantityEveningEdit"]').val();
    var night = $('[name="QuantityNightEdit"]').val();
    var takingNote = $('[name="TakingNoteEdit"]').val();
    var reason = $('[name="ReasonEdit"]').val();
    // var untilTaking = $('[name="UntilTakingEdit"]').val();
    // var houseDoctor = $('[name="HouseDoctorEdit"]').val();
    // var specialDoctor = $('[name="SpecialDoctorEdit"]').val();
    // var selfMedication = $('[name="SelfMedicationEdit"]').val();
    var medicationId = Session.get('medicationId');

    if (activeSubstance === "") {
      console.log('Bitte etwas eintragen');
    } else {
      // Meteor.call('editMedicationPlan', activeSubstance, tradingName, tradingName, dose, form, morning, midday, evening, night, takingNote, reason, untilTaking, houseDoctor, specialDoctor, selfMedication, medicationId)
      Meteor.call('editMedicationPlan', activeSubstance, tradingName, tradingName, dose, form, morning, midday, evening, night, takingNote, reason, medicationId)
      $('#editPatientMedPlanModal').modal('hide');
    }
  }
});
