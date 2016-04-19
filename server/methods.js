Meteor.methods({
  editPatient: function(firstName, lastName, formatedDate, weight, heigth, patientId) {
    var currentUserId = Meteor.userId();
    Patients.update(patientId, {
      $set: {
        firstName: firstName,
        lastName: lastName,
        birthdate: formatedDate,
        weight: weight,
        heigth: heigth,
        editedBy: currentUserId,
      }
    })
  },
  addPatient: function(firstName, lastName, formatedDate, weight, heigth, formatedCreateDate) {
    var currentUserId = Meteor.userId();
    Patients.insert({
      firstName: firstName,
      lastName: lastName,
      birthdate: formatedDate,
      weight: weight,
      heigth: heigth,
      createdAt: formatedCreateDate,
      createdBy: currentUserId
    });
  },
  addMedicationPlan: function(activeSubstance, tradingName, tradingName, dose, form, morning, midday, evening, night, takingNote, reason, patientId) {
    MedicationPlan.insert({
      activeSubstance: activeSubstance,
      tradingName: tradingName,
      dose: dose,
      form: form,
      morning: morning,
      midday: midday,
      evening: evening,
      night: night,
      takingNote: takingNote,
      reason: reason,
      // untilTaking: untilTaking,
      // houseDoctor: houseDoctor,
      // specialDoctor: specialDoctor,
      // selfMedication: selfMedication,
      patientId: patientId
    });
  },
  // removePatient: function(selectedPatient) {
  //   Patients.remove({_id: selectedPatient});
  // },
  removeMedication: function(selectedMed) {
    MedicationPlan.remove({_id: selectedMed});
  },
  removePatAndMed : function (selectedPatientMed) {
    Patients.remove({_id: selectedPatientMed});
    MedicationPlan.remove({patientId: selectedPatientMed});
  },
  addStatus: function(status) {
    Patients.insert({
      status: status
    })
  },
  editMedicationPlan: function(activeSubstance, tradingName, tradingName, dose, form, morning, midday, evening, night, takingNote, reason, medicationId) {
    var currentUserId = Meteor.userId();
    MedicationPlan.update(medicationId, {
      $set: {
        activeSubstance: activeSubstance,
        tradingName: tradingName,
        dose: dose,
        form: form,
        morning: morning,
        midday: midday,
        evening: evening,
        night: night,
        takingNote: takingNote,
        reason: reason,
        // untilTaking: untilTaking,
        // houseDoctor: houseDoctor,
        // specialDoctor: specialDoctor,
        // selfMedication: selfMedication,
        editedBy: currentUserId
      }
    })
  }
});
