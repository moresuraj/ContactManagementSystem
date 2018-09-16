app.controller('AddContactController', function ($scope, ContactService, $location) {
    $scope.ContactID = 0;

    $scope.save = function () {
        var Contact = {
            ContactID: $scope.ContactID,
            FirstName: $scope.FirstName,
            LastName: $scope.LastName,
            Email: $scope.Email,
            PhoneNumber: $scope.PhoneNumber,
            IsActive: $scope.IsActive
        };

        var promisePost = ContactService.post(Contact);

        promisePost.then(function (pl) {
            alert("Contact Saved Successfully.");
            $location.path("/showContacts");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Contact', errorPl;
              });

    };

});