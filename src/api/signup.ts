import {users} from "@/mocks/users";
import {UsersProps} from "@/mocks/interafaces";

export const signupApi = async (name: string, email: string, password: string) => {
    if(!name || !email || !password) {
        throw new Error("Name, Email and password are required.")
    }

    const user = users.filter((u: UsersProps) => u.email === email && u.password === password)[0];

    if(!user) {
        const userPayload: UsersProps = {
            id: users.length + 1,
            first_name: null,
            last_name: null,
            full_name: name,
            premium_member: false,
            admin: false,
            email: email,
            password,
            age: null,
            weight: null,
            weight_unit_type: null,
            height: null,
            height_unit_type: null,
            gender: null,
        };

        users.push(userPayload);

        return userPayload;
    } else {
        throw new Error("User already exist.")
    }

    return user;
}