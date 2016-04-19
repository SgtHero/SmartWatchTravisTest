Template.addPatientModal.events({
  "click #save": function(event) {
    event.preventDefault();
    var firstName = $('[name="FirstName"]').val();
    var lastName = $('[name="LastName"]').val();
    var birthdate = $('[name="Birthdate"]').val();
    var weight = $('[name="Weight"]').val();
    var heigth = $('[name="Heigth"]').val();
    var createdAt = new Date();
    var formatedCreateDate = moment(createdAt).format("DD.MM.YYYY");

    if (birthdate === "") {
      var formatedDate = "Fehlend"
    } else {
      var formatedDate = moment(birthdate).format("DD.MM.YYYY");
    }

    Meteor.call('addPatient', firstName, lastName, formatedDate, weight, heigth, formatedCreateDate);
    $('[name="FirstName"]').val('');
    $('[name="LastName"]').val('');
    $('[name="Birthdate"]').val('');
    $('[name="Weight"]').val('');
    $('[name="Heigth"]').val('');
    $('#addPatientModal').modal('hide');
  }
});
