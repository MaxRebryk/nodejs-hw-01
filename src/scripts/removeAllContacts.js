import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";

export const removeAllContacts = async () => {
  try {
    fs.writeFile(PATH_DB, [], "UTF-8");
    console.log("Contact list is clear");
  } catch (error) {
    console.log(error);
  }
};

await removeAllContacts();
