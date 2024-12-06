import { isDateString, isEmail, isString } from "class-validator";

export class CreateDeveloperDto {
    @isString()
    name: string;

    @isEmail()
    email: string;

    @isDateString()
    dateOfBirth: string;
}
