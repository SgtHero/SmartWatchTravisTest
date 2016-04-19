Template.Home.events({
  "click #addPat": function(e) {
    e.preventDefault();
    $('#addPatientModal').modal('show');
  }
});
