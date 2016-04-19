Template.patients.helpers({
    patientList: function () {
      return Patients.find();
    },
    tableSettings: function () {
        return {
            rowsPerPage: 10,
            showFilter: true,
            showNavigation: 'auto',
            fields: [{
                key: 'firstName',
                label: 'Vorname'
            }, {
                key: 'lastName',
                label: 'Nachname'
            }, {
                key: 'goTo',
                label: '',
                fn: function (name, object) {
                    var link = '<a href="' + /medicationPlan/ + object._id + '">Gehe zu Patient <span class="glyphicon glyphicon-menu-right"></span></a>';
                    return new Spacebars.SafeString(link);
                }
            }, {
                key: 'birthdate',
                label: 'Geburtsdatum'
            }, {
                key: 'weight',
                label: 'Gewicht',
                fn: function (weight) {
                    var html = '<p>' + weight + " kg" + '</p>';
                    return new Spacebars.SafeString(html)
                }
            }, {
                key: 'heigth',
                label: 'Körpergröße',
                fn: function (heigth) {
                    var html = '<p>' + heigth + " cm" + '</p>';
                    return new Spacebars.SafeString(html)
                }
            }, {
                key: 'status',
                label: 'Status',
                tmpl: Template.StatusReactiveTable
            }, {
                key: 'edit',
                label: '',
                fn: function () {
                    return new Spacebars.SafeString('<button type="button" class="editbtn btn btn-primary"><span class="glyphicon glyphicon-edit"></span> Editieren</button>')
                }
            }, {
                key: 'delete',
                label: '',
                fn: function () {
                    return new Spacebars.SafeString('<button type="button" class="deletebtn btn btn-primary"><span class="glyphicon glyphicon-remove"></span> Löschen</button>')
                }
            }]
        };
    }
});
