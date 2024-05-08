import ContactDataProvider from "@/contexts/contact-data-context";
import ContactList from "./contact-list";
import {getContactListDataFromAction} from "@/contexts/contact-data-context-actions";
import ContactModal from "@/app/contacts/contact-modal/contact-modal";
import ContactMenu from "@/app/contacts/contact-menu";


export default async function ContactListContainer() {
    const contactList = await getContactListDataFromAction()
    console.log(contactList)
    return (
        <ContactDataProvider contactListInit={contactList}>
            <ContactModal/>
            <ContactMenu/>
            <ContactList/>
        </ContactDataProvider>
    );
}