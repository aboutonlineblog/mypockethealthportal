export interface UsersProps {
    id: number;
    first_name: string | null;
    last_name: string | null;
    full_name: string | null;
    premium_member: boolean;
    admin: boolean;
    email: string | null;
    age: number | null;
    password: string | null;
    weight: number | null;
    height: number | null;
    weight_unit_type: string | null;
    height_unit_type: string | null;
    gender: string | null;
}

export interface ContactsProps {
    id: number;
    created_at: number;
    updated_at: number;
    message: string;
    type: string;
    handled_by: string | number | null;
    user_id: string | number;
}

export interface ContactsRepliesProps {
    id: number;
    created_at: number;
    updated_at: number;
    message: string;
    type: string;
    handled_by: string | number | null;
    case_id: 0;
    user_id: string | number;
}