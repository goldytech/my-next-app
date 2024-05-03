import {ContactList} from "@/lib/general-types";

export default function ContactDetail({contactList} : {contactList: ContactList}){
    return (
        <div className="col-md-4" key={contactList.id}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{contactList.firstName}</h5>
                    <p className="card-text">{contactList.lastName}</p>

                </div>
            </div>
        </div>
    );

}