import {users} from "@/mocks/users";
import {UsersProps} from "@/mocks/interafaces";

export type UploadUserPayload = {
    id?: number;
    first_name?: string | null;
    last_name?: string | null;
    full_name?: string | null;
    premium_member?: boolean;
    admin?: boolean;
    email?: string | null;
    age?: number | null;
    password?: string | null;
    weight?: number | null;
    height?: number | null;
    weight_unit_type?: string | null;
    height_unit_type?: string | null;
    gender?: string | null;
}

export const updateUser = async (payload: UploadUserPayload, userId?: number) => {
    if(userId !== undefined && payload !== undefined) {
        let user = users.filter((u: UsersProps) => u.id === userId)[0];
        if(user && user.age === null && payload && payload.age) user["age"] = payload.age;

        return user;
    }

    throw new Error("Email and password is required.")
}