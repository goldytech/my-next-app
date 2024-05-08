import {useContactModalContext} from "@/contexts/contact-modal-context";

export default function ContactDialogAdd() {
    const {
        setModalShow,
        setModalContactId,
        setModalContactFirstName,
        setModalContactLastName,
        setModalContactEmail,
    } = useContactModalContext();
    return (
        <>
            <button onClick={() => {
                setModalShow(true);
                setModalContactId(0);
                setModalContactFirstName("");
                setModalContactLastName("");
                setModalContactEmail("");
            }
            }
                    className={"btn btn-accent"}>Add Contact <i className={"fas fa-plus"}/>
            </button>
        </>

    )
}
