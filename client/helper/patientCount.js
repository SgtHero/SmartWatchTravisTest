Template.patientCount.helpers({
  'totalPatients': function() {
    return Patients.find({'patientId': this._id}).count();
  }
});
