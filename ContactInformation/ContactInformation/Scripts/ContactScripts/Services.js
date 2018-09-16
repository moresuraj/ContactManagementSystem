app.service("ContactService", function ($http) {

    //Read all Contacts  
    this.getContacts = function () {

        return $http.get("/api/ManageContactAPI");
    };

    //Fundction to Read Contact by Contact ID  
    this.getContact = function (id) {
        return $http.get("/api/ManageContactAPI/" + id);
    };

    //Function to create new Contact  
    this.post = function (Contact) {
        var request = $http({
            method: "post",
            url: "/api/ManageContactAPI",
            data: Contact
        });
        return request;
    };

    //Edit Contact By ID   
    this.put = function (id, Contact) {
        var request = $http({
            method: "put",
            url: "/api/ManageContactAPI/" + id,
            data: Contact
        });
        return request;
    };

    //Delete Contact By Contact ID  
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/ManageContactAPI/" + id
        });
        return request;
    };
});