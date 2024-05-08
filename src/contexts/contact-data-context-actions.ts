"use server";
import { Contact, ContactDto } from "@/lib/general-types";
import {
  createContactRecord,
  deleteContactRecord,
  getContacts,
  updateContactRecord
} from "@/lib/prisma/contact-data-repo";

export async function getContactListDataFromAction(): Promise<Array<ContactDto>> {
  return await getContacts();
}
export async function createContactAction(contact: Contact) {
  return await createContactRecord(contact);
}
export async function deleteContactAction(contactId: number) {
  return await deleteContactRecord(contactId);
}
export async function updateContactAction(contact: Contact) {
  return await updateContactRecord(contact);
}