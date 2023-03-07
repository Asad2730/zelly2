interface IPersonalInformation {
    firstName: string,
        lastName: string,
        dob: string,
        Address: string,
        zipCode: number,
        cnic:number
}

export interface ISignUp {
    email: string,
    password: string,
    userType: string,
    personalInformation?: IPersonalInformation
}