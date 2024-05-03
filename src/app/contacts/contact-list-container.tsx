import {ContactDataProvider} from "@/contexts/contact-data-context";
import ContactList from "./contact-list";
import {getContactListDataFromAction} from "@/contexts/contact-data-context-actions";



export default async function ContactListContainer() {
    const contactList = await getContactListDataFromAction()
    console.log(contactList)
    return (
      <ContactDataProvider contactListInit={contactList}>
        <ContactList />
       </ContactDataProvider>
    );
}