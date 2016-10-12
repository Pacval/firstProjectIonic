angular.module('app.factories', [])
    .factory('FormDatas', function () {
        datas = {};
        datas.prenom = '';
        datas.nom = '';
        datas.dateNaissance = '';
        datas.mail = '';
    })
