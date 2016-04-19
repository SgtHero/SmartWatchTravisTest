Template.RealState.helpers({
    morningFunction : function () {
        var query = MedicationPlan.findOne({_id: this._id});
        var morningQuanitity = query.morning;
        if (morningQuanitity < 3 && morningQuanitity > 0) {
            return 'fa fa-coffee'
        } else {
            return 'fa fa-ban status-grey'
        }
    },
    middayFunction : function () {
        var query = MedicationPlan.findOne({_id: this._id});
        var middayQuanitity = query.midday;
        if (middayQuanitity < 3 && middayQuanitity > 0) {
            return 'fa fa-sun-o'
        } else {
            return 'fa fa-ban status-grey'
        }
    },
    eveningFunction : function () {
        var query = MedicationPlan.findOne({_id: this._id});
        var eveningQuanitity = query.evening;
        if (eveningQuanitity < 3 && eveningQuanitity > 0) {
            return 'fa fa-moon-o'
        } else {
            return 'fa fa-ban status-grey'
        }
    },
    nightFunction : function () {
        var query = MedicationPlan.findOne({_id: this._id});
        var morningQuanitity = query.night;
        if (morningQuanitity < 3 && morningQuanitity > 0) {
            return 'fa fa-star'
        } else {
            return 'fa fa-ban status-grey'
        }
    },
    timerFunction : function () {
        function f() {
            var status = "status-yellow";
            console.log(status);
            return status
        }
        setTimeout(f, 2000);
    }
});

Template.legende.helpers({
    patient: function () {
        return MedicationPlan.find().fetch();
    }
})