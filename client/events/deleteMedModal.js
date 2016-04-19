Template.deleteMedModal.events({
  "click #deleteMed": function(event) {
    event.preventDefault();
    var selectedMed = Session.get('medId');
    Meteor.call('removeMedication', selectedMed);
    $('#deleteMedModal').modal('hide');
  }
});
