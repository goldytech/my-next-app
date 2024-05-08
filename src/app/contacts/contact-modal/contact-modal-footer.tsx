import {useState} from "react";
import {useContactModalContext} from "@/contexts/contact-modal-context";
import {useContactDataContext} from "@/contexts/contact-data-context";

export default function ContactModalFooter() {
    const {
        setModalShow,
        modalContactId,
        modalContactFirstName,
        modalContactLastName,
        modalContactEmail,

    } = useContactModalContext();
    const {updateContact, createContact} = useContactDataContext();
    const [updating, setUpdating] = useState<boolean>(false);
    const [creating, setCreating] = useState<boolean>(false);

    return (
        <div className={"modal-footer justify-content-center"}>
            {modalContactId != 0 && (
                <button onClick={() => {
                    setUpdating(true);
                    updateContact({
                        id: modalContactId,
                        firstName: modalContactFirstName,
                        lastName: modalContactLastName,
                        email: modalContactEmail,
                    }, () => {
                        setUpdating(false);
                        setModalShow(false);
                    }, (message) => {
                        setUpdating(false);
                        alert(message);
                    });
                }
                }
                        className={"float-left btn btn-accent"} disabled={updating}>
                    {updating ? "Updating..." : "Update"}
                </button>
            )}
            <button className={"btn btn-danger"} onClick={() => {
                setModalShow(false);
            }}
                    data-dismiss={"modal"}>Discard
            </button>
            {modalContactId === 0 && (
                <button className={"btn btn-accent"}
                        disabled={creating}
                        onClick={() => {
                            setCreating(true);
                            createContact({
                                id: modalContactId,
                                firstName: modalContactFirstName,
                                lastName: modalContactLastName,
                                email: modalContactEmail,
                            }, () => {
                                setCreating(false);
                                setModalShow(false);
                            }, (message) => {
                                setCreating(false);
                                setModalShow(false);
                                alert(message);
                            });
                        }
                        }
                >
                    {creating ? "Creating..." : "Create"}
                </button>
            )}
        </div>
    );
}