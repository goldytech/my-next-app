import {ContactDto} from "@/lib/general-types";
import ContactDialogEdit from "@/app/contacts/contact-dialog-edit";
import ContactDeleteButton from "@/app/contacts/contact-delete-button";

export default function ContactDetail({contactList} : {contactList: ContactDto}){
    return (
        <div className="col-md-4" key={contactList.id}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{contactList.firstName}</h5>
                    <p className="card-text">{contactList.lastName}</p>

                </div>
                <div className={"modifyWrapper"}>
                    <ContactDialogEdit contactId={contactList.id} />
                    <ContactDeleteButton contactId={contactList.id} />
                </div>
            </div>
        </div>
    );

}