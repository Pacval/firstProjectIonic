angular.module('app.controllers', [])

.controller('formPart1Ctrl', function ($scope, $ionicPopup, $state) {
        if (typeof $scope.form === "undefined") {
            $scope.form = {
                'prenom': "",
                'nom': "",
                'dateNaissance': "",
                'mail': ""
            };
        }


        $scope.reset = function () {
            var popupConfirmReset = $ionicPopup.confirm({
                title: 'Effacer les entrées',
                template: 'Voulez vous effacer les champs entrés ?'
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

                // Go to form part 2
                $state.go('formPart2');

            } else {

                $ionicPopup.alert({
                    title: 'Erreur',
                    template: 'Veuillez remplir tous les champs'
                });
            }
        }
    })
    .controller('formPart2Ctrl', function ($scope, $state) {

    })
