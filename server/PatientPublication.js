Meteor.publish('AllPatients', function () {
    var patients = Patients.find();

    if (patients) {
        return patients;
    }

    return this.ready();
});

Meteor.publish('AllMedPlans', function(){
  //var medPlans = MedicationPlan.find({":id": _id});
  var medPlans = MedicationPlan.find();

  if (medPlans) {
    return medPlans;
  }

  return this.ready();
});

// f�r Zugriff auf einzelne Patienten und Medikationspl�ne �ber die App

Meteor.publish('getPatientByName', function (firstName) {
    var patient = Patients.find({"firstName": firstName});

    if (patient) {
        return patient;
    }

    return this.ready();
});

Meteor.publish('getMedPlansByPatient', function (patientId) {
    var medPlan = MedicationPlan.find({"patientId": patientId});

    if (medPlan) {
        return medPlan;
    }

    return this.ready();
});
