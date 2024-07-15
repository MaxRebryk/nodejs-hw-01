import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "UTF-8");
    const contactsArray = JSON.parse(data);
    console.log(contactsArray);
    return contactsArray;
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
