Template.editPatientModal.events({
  'click #edit': function(event) {
    event.preventDefault();

    var firstName = $('[name="FirstNameEdit"]').val();
    var lastName = $('[name="LastNameEdit"]').val();
    var birthdate = $('[name="BirthdateEdit"]').val();
    var weight = $('[name="WeightEdit"]').val();
    var heigth = $('[name="HeigthEdit"]').val();
    var patientId = Session.get('patientId');

    var formatedDate = moment(birthdate).format("D.MM.YYYY");

    Meteor.call('editPatient', firstName, lastName, formatedDate, weight, heigth, patientId);

    $('[name="FirstName"]').val('');
    $('[name="LastName"]').val('');
    $('[name="Birthday"]').val('');
    $('[name="Weigth"]').val('');
    $('[name="Heigth"]').val('');
    $('#editPatientModal').modal('hide');
  }
});
