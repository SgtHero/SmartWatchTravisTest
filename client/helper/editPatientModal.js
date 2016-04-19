Template.editPatientModal.helpers({
  patient: function() {
    var patientId = Session.get('patientId');

    if (typeof patientId !== "undefined") {
      var patient = Patients.findOne(patientId);
      return patient;
    } else {
      return {
        activeSubstance: '',
        lastName: '',
        birthdate: '',
        weight: '',
        heigth: ''
      }
    }
  }
});
