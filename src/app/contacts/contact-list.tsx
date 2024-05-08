"use client";
import {useContactDataContext} from "@/contexts/contact-data-context";
import ContactDetail from "@/app/contacts/contact-detail";
import useContactSortAndFilter from "@/hooks/use-contact-sort-and-filter";
import {useContactMenuContext} from "@/contexts/contact-menu-context";

export default function ContactList() {
    const {contactState} = useContactDataContext();
    const {searchTxt} = useContactMenuContext();
    const contactList = contactState.contactList;
    const sortedAndFilterList = useContactSortAndFilter(contactList, "firstName", searchTxt);
    return (
        <div className="container pb-4">
            <div className={"row g-4"}>
                {sortedAndFilterList.map((contact) => {
                    return <ContactDetail contactList={contact} key={contact.id}/>;

                })}
            </div>
        </div>
    );
}