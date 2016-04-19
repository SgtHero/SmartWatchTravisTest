Router.route('/', {
  name: 'Home',
  template: 'Home'
});

Router.route('/medicationPlan/:_id', {
  name: 'medicationPlan',
  template: 'medicationPlan',
  data: function () {
    var currentPatientMedsPlan = this.params._id;
    return Patients.findOne({_id: currentPatientMedsPlan});
  }
});

Router.configure({
  layoutTemplate: 'Main'
});
