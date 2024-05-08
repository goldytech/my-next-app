import {useContactModalContext} from "@/contexts/contact-modal-context";

export default function ContactModalHeader() {
    const {setModalShow, modalContactId} = useContactModalContext();
    return (
        <div className={"modal-header bg-main-gradient text-white"}>
            <h5 className={"modal-title"}>
                {modalContactId === 0 ? (<span>Add Contact</span>) : (<span>Edit Contact</span>)}
            </h5>
            <button type={"button"} onClick={() => setModalShow(false)} className={"btn btn-sm text-dark"}
                    data-dismiss={"modal"} aria-label={"close"}>
                <i className={"fa fa-times"}></i>
            </button>
        </div>
    )
}


