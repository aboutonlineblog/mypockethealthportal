import {ContactsProps, ContactsRepliesProps} from "./interafaces";

export const contacts: Array<ContactsProps> = [
    {
        id: 0,
        created_at: new Date().setHours(new Date().getHours() - 10),
        updated_at: new Date().setHours(new Date().getHours() - 5),
        message: "Test message",
        type: "feature_request",
        handled_by: null, //<<-- user id who responded the user
        user_id: 0
    },
]

export const contactsReplies: Array<ContactsRepliesProps> = [
    {
        id: 0,
        created_at: new Date().setHours(new Date().getHours() - 10),
        updated_at: new Date().setHours(new Date().getHours() - 5),
        message: "Test message",
        type: "feature_request",
        handled_by: null, //<<-- user id who responded the user
        case_id: 0,
        user_id: 0
    },
]