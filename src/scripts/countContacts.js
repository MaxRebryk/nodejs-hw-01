import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "UTF-8");
    if (!data) {
      console.log(0);
      return 0;
    }
    const contactsArray = JSON.parse(data);
    console.log(contactsArray.length);
  } catch (error) {
    console.log(error);
  }
};

countContacts();
