app.controller('ShowContactsController', function ($scope, $location, ContactService, ShareData) {
    loadAllContactsRecords();

    function loadAllContactsRecords() {
        var promiseGetContact = ContactService.getContacts();

        promiseGetContact.then(function (pl) { $scope.Contacts = pl.data },
              function (errorPl) {
                  $scope.error = errorPl;
              });
    }

    //To Edit Contact Information  
    $scope.editContact = function (ContactID) {
        ShareData.value = ContactID;
        $location.path("/editContact");
    }

    //To Delete a Contact  
    $scope.deleteContact = function (ContactID) {
        ShareData.value = ContactID;
        $location.path("/deleteContact");
    }
});