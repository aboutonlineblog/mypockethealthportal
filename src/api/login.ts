import {users} from "../mocks/users";
import {LoginProps} from "../screens/Login/interafaces";

export const loginApi = async (email: string, password: string) => {
    return users.filter((u: LoginProps) => u.email === email && u.password === password)[0];
}