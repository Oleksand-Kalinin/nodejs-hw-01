import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, '[]', 'utf8');
        console.log('File successfully cleared');
    } catch (error) {
        console.error('An error occurred while clearing the file:', error);
    }
};

removeAllContacts();
