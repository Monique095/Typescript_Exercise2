//Interface
interface User{
    forenames: string;
    surname: string;
    nickname: string | undefined;
    emailAddress: string;
    role: string;
    dateCreated: Date;
    dateRemoved: Date | undefined;
    locked: boolean;
    failedLoginAttemps: number;

    //Method signatures
    firstName: () => string;
    fullName: () => string;

}