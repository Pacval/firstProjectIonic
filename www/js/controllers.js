angular.module('controllers', [])

.controller('formCtrl', function ($scope, $ionicPopup) {
    $scope.form = {
        'prenom': "",
        'nom': "",
        'dateNaissance': "",
        'mail': ""
    };

    $scope.reset = function () {
        var popupConfirmReset = $ionicPopup.confirm({
            title: 'Effacer les entrées',
            template: 'Voulez vous effacez les champs entrés ?'
        });

        popupConfirmReset.then(function (res) {
            if (res) {
                $scope.form.prenom = "";
                $scope.form.nom = "";
                $scope.form.dateNaissance = "";
                $scope.form.mail = "";
            }
        });
    };

    $scope.submit = function () {
        if ($scope.form.prenom !== "" &&
            $scope.form.nom !== "" &&
            $scope.form.dateNaissance !== "" &&
            $scope.form.mail !== "") {

            $ionicPopup.alert({
                title: 'Données envoyées',
                template: 'Bonjour ' + $scope.form.prenom + ' ' + $scope.form.nom
            });
        } else {

            $ionicPopup.alert({
                title: 'Erreur',
                template: 'Veuillez remplir tous les champs'
            });
        }
    }
})
