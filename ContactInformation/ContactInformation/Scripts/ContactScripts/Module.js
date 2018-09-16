var app = angular.module("ApplicationModule", ["ngRoute"]);

app.factory("ShareData", function () {
    return { value: 0 }
});

//Showing Routing  
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/showContacts',
                        {
                            templateUrl: 'ManageContact/ShowContacts',
                            controller: 'ShowContactsController'
                        });
    $routeProvider.when('/addcontact',
                        {
                            templateUrl: 'ManageContact/AddContact',
                            controller: 'AddContactController'
                        });
    $routeProvider.when("/editContact",
                        {
                            templateUrl: 'ManageContact/EditContact',
                            controller: 'EditContactController'
                        });
    $routeProvider.when('/deleteContact',
                        {
                            templateUrl: 'ManageContact/DeleteContact',
                            controller: 'DeleteContactController'
                        });
    $routeProvider.otherwise(
                        {
                            redirectTo: '/'
                        });

    $locationProvider.html5Mode(true).hashPrefix('!')
}]);