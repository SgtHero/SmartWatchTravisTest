Template.medicationPlan.helpers({
  patientMedicationPlan: function() {
    return MedicationPlan.find({
      'patientId': this._id
    });
  },

  tableSettings: function() {
    return {
      rowsPerPage: 10,
      showFilter: true,
      showNavigation: 'auto',
      fields: [{
          key: 'activeSubstance',
          label: 'Wirkstoff'
        }, {
          key: 'tradingName',
          label: 'Handelsname'
        }, {
          key: 'dose',
          label: 'Dosis'
        }, {
          key: 'form',
          label: 'Form'
        }, {
          key: 'morning',
          label: 'Morgens'
        }, {
          key: 'midday',
          label: 'Mittags'
        }, {
          key: 'evening',
          label: 'Abends'
        }, {
          key: 'night',
          label: 'z. Nacht'
        }, {
          key: 'takingNote',
          label: 'Einnahmehinweis'
        }, {
          key: 'reason',
          label: 'Grund'
        }, //{
        //   key: 'untilTaking',
        //   label: 'Anwenden bis'
        // }, {
        //   key: 'houseDoctor',
        //   label: 'Hausarzt'
        // }, {
        //   key: 'specialDoctor',
        //   label: 'Facharzt'
        // }, {
        //   key: 'selfMedication',
        //   label: 'Selbstmedikation'
        // },
        {
          key: 'edit',
          label: '',
          fn: function() {
            return new Spacebars.SafeString('<button type="button" class="editbtn btn btn-primary"><span class="glyphicon glyphicon-edit"></span> Editieren</button>')
          }
        }, {
          key: 'delete',
          label: '',
          fn: function() {
            return new Spacebars.SafeString('<button type="button" class="deletebtn btn btn-primary"><span class="glyphicon glyphicon-remove"></span> Löschen</button>')
          }
        }
      ]
    };
  }
});
