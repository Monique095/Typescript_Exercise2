/// <reference path="customer.ts"/>
/// <reference path="salesrep.ts"/>

const displays: Customer = new Customer();
const sales: SalesRep = new SalesRep();
displays.forenames = 'John Edward';
//displays.nickname = 'Joey';
displays.surname = 'van Niekerk'

function firstName(){   
    if(displays.nickname == null){
        //Get the first word of the Forename
        console.log("Forenames: " + displays.forenames.slice(0,5));   
    }
    else{
        console.log("Nickname: " + displays.nickname);
    }
}
firstName();

function fullName() {
    //firstName method
    firstName();
    //Display with Surname
    console.log("Surname: " + displays.surname);
}
fullName();

function salesRep(){
    //Array
    let customers: Array<string> = ["John Edward", "Beth Dan"];
    console.log("Customers Array: " + customers);
    //firstName method
    firstName();
}
salesRep();