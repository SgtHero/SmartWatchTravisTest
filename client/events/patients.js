Template.patients.events({
  'click .reactive-table tbody tr': function(event) {
    var selectedPatient = this;
    if (event.target.className == "editbtn btn btn-primary") {
      Session.set('patientId', selectedPatient._id);
      $('#editPatientModal').modal('show');
    }
  }
});

Template.patients.events({
  'click .reactive-table tbody tr': function(event) {
    var selectedPatient = this;
    if (event.target.className == "deletebtn btn btn-primary") {
      $('#deletePatientModal').modal('show');
      Session.set('patientId', selectedPatient._id);
    }
  }
});
