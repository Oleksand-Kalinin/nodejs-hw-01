import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';
import fs from 'node:fs/promises';


export const writeContacts = async (updatedContacts) => {
  const currentData = await readContacts();
  const newData = JSON.stringify([...currentData, ...updatedContacts]);
  try {
    await fs.writeFile(PATH_DB, newData, 'utf8');
    console.log('Data successfully written to file');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
};
