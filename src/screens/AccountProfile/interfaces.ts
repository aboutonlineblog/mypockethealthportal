import React from "react";

export type ProfileSectionsProps = {
    id: string;
    component: () => React.ReactElement;
}

export type RenderProfileSectionProps = {
    item: ProfileSectionsProps,
    index: number;
}

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

export type UpdateProfileNavProps = {
    EditProfile: {
        id: number
    } | undefined;
};