import {UsersProps} from "./interafaces";

export const users: Array<UsersProps> = [
    {
        id: 0,
        first_name: "neil",
        last_name: "te",
        full_name: "neil te",
        premium_member: false,
        admin: false,
        email: "neil@gmail.com",
        password: "letmein", //<-- will be hashed in the backend
        age: 37,
        weight: 84,
        weight_unit_type: "kg",
        height: 170,
        height_unit_type: "cm",
        gender: "male",
    },
    {
        id: 1,
        first_name: "junski",
        last_name: "here",
        full_name: "junski here",
        premium_member: false,
        admin: false,
        email: "junskihere@gmail.com",
        password: "letmein123", //<-- will be hashed in the backend
        age: 37,
        weight: 84,
        weight_unit_type: "kg",
        height: 170,
        height_unit_type: "cm",
        gender: "male",
    },
    {
        id: 1,
        first_name: "ekker",
        last_name: "pumanes",
        full_name: "ekker gwapo",
        premium_member: false,
        admin: false,
        email: "ekker@gmail.com",
        password: "letmein123", //<-- will be hashed in the backend
        age: 33,
        weight: 84,
        weight_unit_type: "kg",
        height: 170,
        height_unit_type: "cm",
        gender: "male",
    }
]