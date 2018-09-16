app.controller("DeleteContactController", function ($scope, $location, ShareData, ContactService) {

    getContact();
    function getContact() {

        var promiseGetContact = ContactService.getContact(ShareData.value);


        promiseGetContact.then(function (pl) {
            $scope.Contact = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Contact', errorPl;
              });
    }

    $scope.delete = function () {
        var promiseDeleteContact = ContactService.delete(ShareData.value);

        promiseDeleteContact.then(function (pl) {
            alert("Contact Deleted Successfully.");
            $location.path("/showContacts");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Contact', errorPl;
              });
    };

});