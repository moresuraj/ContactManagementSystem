app.controller("EditContactController", function ($scope, $location, ShareData, ContactService) {
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

    $scope.save = function () {
        var Contact = {
            ContactID: $scope.Contact.contactID,
            FirstName: $scope.Contact.firstName,
            LastName: $scope.Contact.lastName,
            Email: $scope.Contact.email,
            PhoneNumber: $scope.Contact.phoneNumber,
            IsActive: $scope.Contact.isActive
        };

        var promisePutContact = ContactService.put($scope.Contact.contactID, Contact);
        promisePutContact.then(function (pl) {
            alert("Contact Updated Successfully.");
            $location.path("/showContacts");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Contact', errorPl;
              });
    };

});