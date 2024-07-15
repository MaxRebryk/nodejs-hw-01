import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";
import createFakeContacts from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
  try {
    let contacts = [];
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContacts());
    }
    const contactsJson = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, contactsJson, "UTF-8");
    console.log(`Added ${number} contacts`);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
