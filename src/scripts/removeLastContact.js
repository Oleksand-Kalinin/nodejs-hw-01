import { PATH_DB } from "../constants/contacts.js";
import { readContacts } from "../utils/readContacts.js";
// import { removeAllContacts } from "./removeAllContacts.js";
// import { writeContacts } from "../utils/writeContacts.js";
import fs from 'node:fs/promises';


export const removeLastContact = async () => {

    try {
        const data = await readContacts();
        if (data.length === 0) return console.log("File is empty");
        data.pop();

        // Цей варіант не працює:
        // await removeAllContacts();
        // await writeContacts(data);

        await fs.writeFile(PATH_DB, JSON.stringify([...data]), 'utf8');
    } catch (error) {
        console.error('Error removing the last element:', error);
    }

};

removeLastContact();
