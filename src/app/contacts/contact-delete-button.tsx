import {useState} from "react";
import {useContactDataContext} from "@/contexts/contact-data-context";

export default function ContactDeleteButton({contactId} : {contactId: number}) {
    const {deleteContact} = useContactDataContext();
    const [deleting, setDeleting] = useState<boolean>(false);
    return(
        <button onClick={(e) => {
            e.preventDefault();
            setDeleting(true);
            const confirmDelete = window.confirm("Are you sure you want to delete this contact?");
            if (confirmDelete){
                deleteContact(contactId, () => {
                        setDeleting(false);
                    },
                    (message) => {
                        setDeleting(false);
                        alert(message);
                    });
            }
        }}
            className={"btn btn-danger btn-sm"}>
            <i className={"fa fa-trash"}/>
            {deleting ? "Deleting..." : "Delete"}
        </button>
    );
}