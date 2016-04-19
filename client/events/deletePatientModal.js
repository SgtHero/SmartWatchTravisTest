Template.deletePatientModal.events({
  "click #deletePatient": function(event) {
    event.preventDefault();
    var selectedPatient = Session.get('patientId');
    Meteor.call('removePatAndMed', selectedPatient);
    $('#deletePatientModal').modal('hide');
  }
});
