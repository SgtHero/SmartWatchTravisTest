Template.medicationPlan.events({
  'click .reactive-table tbody tr': function(event) {
    var selectedMed = this;
    if (event.target.className == "deletebtn btn btn-primary") {
      $('#deleteMedModal').modal('show');
      Session.set('medId', selectedMed._id);
    }
  },
  'click #addMedPlan': function(e) {
    e.preventDefault();
    $('#addMedPlanModal').modal('show');
  }
});

Template.medicationPlan.events({
  'click .reactive-table tbody tr': function(event) {
    event.preventDefault();
    var selectedMedication = this;
    if (event.target.className == "editbtn btn btn-primary") {
      Session.set('medicationId', selectedMedication._id);
      $('#editPatientMedPlanModal').modal('show');
    }
  }
});
