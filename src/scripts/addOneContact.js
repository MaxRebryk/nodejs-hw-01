import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";
import createFakeContacts from "../utils/createFakeContact.js";

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "UTF-8");
    if (data) {
      const contactsArray = JSON.parse(data);
      contactsArray.push(createFakeContacts());
      fs.writeFile(PATH_DB, JSON.stringify(contactsArray, null, 2), "UTF-8");
      console.log("Added 1 contact");
    } else {
      const oneContact = [];
      oneContact.push(createFakeContacts());
      fs.writeFile(PATH_DB, JSON.stringify(oneContact, null, 2), "UTF-8");
      console.log("Added 1 contact");
    }
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
