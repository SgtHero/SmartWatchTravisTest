Template.addPatientMedPlanModal.events({
  "click #save": function(event) {
    event.preventDefault();
    var activeSubstance = $('[name="ActiveSubstance"]').val();
    var tradingName = $('[name="TradingName"]').val();
    var dose = $('[name="Dose"]').val();
    var form = $('[name="Form"]').val();
    var morning = $('[name="QuantityMorning"]').val();
    var midday = $('[name="QuantityMidday"]').val();
    var evening = $('[name="QuantityEvening"]').val();
    var night = $('[name="QuantityNight"]').val();
    var takingNote = $('[name="TakingNote"]').val();
    var reason = $('[name="Reason"]').val();
    // var untilTaking = $('[name="UntilTaking"]').val();
    // var houseDoctor = $('[name="HouseDoctor"]').val();
    // var specialDoctor = $('[name="SpecialDoctor"]').val();
    // var selfMedication = $('[name="SelfMedication"]').val();
    var patientId = this._id;
    

    if (activeSubstance === "") {
      console.log('Bitte etwas eintragen');
    } else {
      // Meteor.call('addMedicationPlan', activeSubstance, tradingName, tradingName, dose, form, morning, midday, evening, night, takingNote, reason, untilTaking, houseDoctor, specialDoctor, selfMedication, patientId)
      Meteor.call('addMedicationPlan', activeSubstance, tradingName, tradingName, dose, form, morning, midday, evening, night, takingNote, reason, patientId)
    }
    $('[name="ActiveSubstance"]').val('');
    $('[name="TradingName"]').val('');
    $('[name="Dose"]').val('');
    $('[name="Form"]').val('');
    $('[name="QuantityMorning"]').val('');
    $('[name="QuantityMidday"]').val('');
    $('[name="QuantityEvening"]').val('');
    $('[name="QuantityNight"]').val('');
    $('[name="TakingNote"]').val('');
    $('[name="Reason"]').val('');
    $('#addMedPlanModal').modal('hide');
  }
});
