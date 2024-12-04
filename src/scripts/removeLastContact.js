import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "UTF-8");
    if (!data) {
      console.log("list is clear");
      return;
    }
    const contactsArray = JSON.parse(data);

    if (contactsArray.length > 1) {
      contactsArray.pop();
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(contactsArray, null, 2),
        "UTF-8"
      );
    } else {
      console.log("Contact list is empty!");
    }
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
