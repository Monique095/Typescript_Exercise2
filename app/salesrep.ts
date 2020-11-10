/// <reference path="user.ts"/>

class SalesRep implements User{
    //User interface properties
    forenames!: string;
    surname!: string;
    nickname: string | undefined;
    emailAddress!: string;
    role!: string;
    dateCreated = new Date();
    dateRemoved = new Date() && undefined;
    locked!: boolean;
    failedLoginAttemps!: number;

    //Method Signatures
    firstName(){
        return this.forenames + this.nickname; 
    }
    fullName(){
        return this.firstName() + this.surname;
    }; 

    //SalesRep Array
    public customers: User[] = [];

}