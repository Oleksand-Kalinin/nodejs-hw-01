import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const oneContact = [createFakeContact()];
    await writeContacts(oneContact);
};

addOneContact();
