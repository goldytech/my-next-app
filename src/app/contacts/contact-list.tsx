import {useContactDataContext} from "@/contexts/contact-data-context";
import ContactDetail from "@/app/contacts/contact-detail";

export default function ContactList() {
    const {contactState} = useContactDataContext();
    const contactList = contactState.contactList;
    return (
        <div className="container pb-4">
            <div className={"row g-4"}>
                {contactList.map((contact) => {
                    return <ContactDetail contactList={contact} key={contact.id}/>;

                })}
            </div>
        </div>
    );
}