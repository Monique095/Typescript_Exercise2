"use strict";
var Customer = (function () {
    function Customer() {
        this.dateCreated = new Date();
        this.dateRemoved = new Date() && undefined;
        this.lastLoginDate = new Date();
    }
    Customer.prototype.firstName = function () {
        return this.forenames + this.nickname;
    };
    Customer.prototype.fullName = function () {
        return this.firstName() + this.surname;
    };
    ;
    return Customer;
}());
var SalesRep = (function () {
    function SalesRep() {
        this.dateCreated = new Date();
        this.dateRemoved = new Date() && undefined;
        this.customers = [];
    }
    SalesRep.prototype.firstName = function () {
        return this.forenames + this.nickname;
    };
    SalesRep.prototype.fullName = function () {
        return this.firstName() + this.surname;
    };
    ;
    return SalesRep;
}());
var displays = new Customer();
var sales = new SalesRep();
displays.forenames = 'John Edward';
displays.surname = 'van Niekerk';
function firstName() {
    if (displays.nickname == null) {
        console.log("Forenames: " + displays.forenames.slice(0, 5));
    }
    else {
        console.log("Nickname: " + displays.nickname);
    }
}
firstName();
function fullName() {
    firstName();
    console.log("Surname: " + displays.surname);
}
fullName();
function salesRep() {
    var customers = ["John Edward", "Beth Dan"];
    console.log("Customers Array: " + customers);
    firstName();
}
salesRep();
//# sourceMappingURL=app.js.map