import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    const arrContacts = [];
    for (let i = 0; i < number; i++) {
        arrContacts.push(createFakeContact());
    }
    await writeContacts(arrContacts);
};

generateContacts(5);
