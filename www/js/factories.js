angular.module('app.factories', [])

.factory('FormDatas', function () {
    datas = {};
    datas.prenom = 'Val';
    datas.nom = 'Rochet';
    datas.dateNaissance = '';
    datas.mail = 'val.rochet@gmail.com';

    return datas;
});
