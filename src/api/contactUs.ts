import {contacts} from "@/mocks/contacts";
import {ContactsProps} from "@/mocks/interafaces";
import {ConcernPayloadProps} from "@/screens/ContactUs/interfaces";

export const postContactApi = async (payload: ConcernPayloadProps) => {
    if(payload.message === "" || !payload.message) {
        throw new Error("Message is required.")
    }

    if(payload.message && payload.message.length < 20) {
        throw new Error("Please write at least 20 characters.")
    }

     if(payload.type === null || !payload.type) {
        throw new Error("Please select a concern.")
    }

    try {
        const id = contacts.length + 1;
        const contactPayload = {
            ...payload,
            created_at: new Date().getTime(),
            updated_at: new Date().getTime(),
            handled_by: 1,
            user_id: 0,
            id,
        }

        contacts.push(contactPayload as ContactsProps);
        const newContact = contacts.filter((c: ContactsProps) => c.id === id)[0];

        if(newContact !== undefined) {
            return contactPayload;
        }

        throw new Error("Failed to submit your query. Please try again later.")
    } catch (error) {
        throw error;
    }
}