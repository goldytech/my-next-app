import {useContactModalContext} from "@/contexts/contact-modal-context";

export default function ContactModalBody() {
    const {
        modalContactId,
        modalContactFirstName,
        setModalContactFirstName,
        modalContactLastName,
        setModalContactLastName,
        modalContactEmail,
        setModalContactEmail,
    } = useContactModalContext();

    return (
        <div className={"modal-body"}>
            <div className={"notes-box"}>
                <div className={"notes-content"}>
                    <form>
                        <div className={"row"}>
                            <div className={"col-md-12"}>
                                <div className={"note-title"}>
                                    <label>Contact Id</label>
                                    <span>{modalContactId}</span>
                                </div>
                            </div>
                            <div className={"col-md-12"}>
                                <div className={"note-title"}>
                                    <label>First Name</label>
                                    <input type={"text"} className={"form-control"} value={modalContactFirstName}
                                           onChange={(e) => setModalContactFirstName(e.target.value)}
                                           placeholder={"First Name"}/>

                                </div>
                            </div>
                            <div className={"col-md-12"}>
                                <div className={"note-title"}>
                                    <label>Last Name</label>
                                    <input type={"text"} className={"form-control"} value={modalContactLastName}
                                           onChange={(e) => setModalContactLastName(e.target.value)}
                                           placeholder={"Last Name"}/>

                                </div>
                            </div>
                            <div className={"col-md-12"}>
                                <div className={"note-title"}>
                                    <label>Email</label>
                                    <input type={"text"} className={"form-control"} value={modalContactEmail}
                                           onChange={(e) => setModalContactEmail(e.target.value)}
                                           placeholder={"Email"}/>

                                </div>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}