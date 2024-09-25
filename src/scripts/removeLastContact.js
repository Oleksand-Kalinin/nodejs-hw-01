import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { removeAllContacts } from "./removeAllContacts.js";

export const removeLastContact = async () => {
    const data = await readContacts();
    if (data.length === 0) return console.log("File is empty");
    data.pop();
    await removeAllContacts();
    await writeContacts(data);
};

removeLastContact();
