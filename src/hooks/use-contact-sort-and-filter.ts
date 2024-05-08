import {ContactDto} from "@/lib/general-types";

export default function useContactSortAndFilter(contactList: ContactDto[], sortField: string, filterField: string) {
    let sortedList = contactList;
    if (sortField === "firstName") {
        sortedList = contactList.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (sortField === "lastName") {
        sortedList = contactList.sort((a, b) => a.lastName.localeCompare(b.lastName));
    }
    return sortedList.filter((contact) => {
        return contact.firstName.toLowerCase().includes(filterField.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(filterField.toLowerCase());
    });
}
