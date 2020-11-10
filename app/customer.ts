/// <reference path="user.ts"/>

class Customer implements User{
    //User interface properties
    forenames!: string;
    surname!: string;
    nickname: string | undefined;
    emailAddress!: string;
    role!: string;
    dateCreated = new Date();
    dateRemoved = new Date() && undefined;
    locked!: boolean;
    failedLoginAttemps!: number

    //Method Signatures
    firstName(){
        return this.forenames + this.nickname; 
    }
    fullName(){
        return this.firstName() + this.surname;
    }; 

    //Newly added property for only Customer class
    lastLoginDate = new Date();
}