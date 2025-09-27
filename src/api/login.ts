import {users} from "@/mocks/users";
import {UsersProps} from "@/mocks/interafaces";

export const loginApi = async (email: string | null, password: string | null) => {
    if(!email || !password) {
        throw new Error("Email and password is required.")
    }

    const user = users.filter((u: UsersProps) => u.email === email && u.password === password)[0];

    if(!user) {
        throw new Error("User not found.")
    }

    return user;
}