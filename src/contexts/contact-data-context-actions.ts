"use server";
import { Contact, ContactList } from "@/lib/general-types";
import { getContacts } from "@/lib/prisma/contact-data-repo";

export async function getContactListDataFromAction(): Promise<Array<ContactList>> {
  return await getContacts();
}