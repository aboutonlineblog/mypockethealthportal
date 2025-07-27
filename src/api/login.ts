import {users} from "@/mocks/users";
import {LoginProps} from "@/screens/Login/interafaces";

export const loginApi = async (email: string, password: string) => {
    if(!email || !password) {
        throw new Error("Email and password is required.")
    }

    const user = users.filter((u: LoginProps) => u.email === email && u.password === password)[0];

    if(!user) {
        throw new Error("User not found.")
    }

    return user;
}