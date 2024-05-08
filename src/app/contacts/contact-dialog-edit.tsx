import {Contact} from "@/lib/general-types";
import {useContactDataContext} from "@/contexts/contact-data-context";
import {useContactModalContext} from "@/contexts/contact-modal-context";


export default function ContactDialogEdit({
    contactId,
}: { contactId: number }) {
    const {contactState} = useContactDataContext();
    const {contactList} = contactState;
    const contactRec : Contact = contactList.find((contact) => contact.id === contactId) as Contact;
    const {id, firstName, lastName, email} : Contact = contactRec;
    const {
        setModalShow,
        setModalContactId,
        setModalContactFirstName,
        setModalContactLastName,
        setModalContactEmail,
    } = useContactModalContext();
    return(
        <button onClick={(e) =>{
            e.preventDefault();
            setModalShow(true);
            setModalContactId(id);
            setModalContactFirstName(firstName);
            setModalContactLastName(lastName);
            setModalContactEmail(email);
        }} className={"btn btn-accent btn-sm"}>Edit</button>
    )


}