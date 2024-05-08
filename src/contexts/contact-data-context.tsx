"use client";
import React, {createContext, ReactNode} from "react";
import {Contact, ContactDto} from "@/lib/general-types";
import {createContactAction, deleteContactAction, updateContactAction} from "@/contexts/contact-data-context-actions";


type ContactState = {
    contactList: ContactDto[];
};


interface ContactDataContextProps {
    contactState: ContactState;
    setContactState?: React.Dispatch<React.SetStateAction<ContactState>>;
    createContact:(contactRec:Contact,completionFunction:()=>void,errorFunction?:(message:string)=>void)=>void;
    updateContact:(contactRec:Contact,completionFunction:()=>void,errorFunction?:(message:string)=>void)=>void;
    deleteContact:(id:number,completionFunction:()=>void,errorFunction?:(message:string)=>void)=>void;
}

const ContactDataContext: React.Context<ContactDataContextProps | undefined> = createContext<ContactDataContextProps | undefined>(undefined);

export default function ContactDataProvider({
                                                children, contactListInit
                                            }: {
    children: ReactNode, contactListInit: Array<ContactDto>
}) {
    const initialState: ContactState = {
        contactList: contactListInit
    };
    const [contactState, setContactState] = React.useState<ContactState>(initialState);
    function createContact(contactRec: Contact, completionFunction: () => void, errorFunction?: (message: string) => void) {
        async function createLocal(){
            const contactToAdd : Contact = {
                ...contactRec,
                id:0
            };
            try {
                const newContact = await createContactAction(contactToAdd), contactDto: ContactDto = {
                    id: 0,
                    firstName: contactToAdd.firstName,
                    lastName: contactToAdd.lastName,
                };
                setContactState((prevState:ContactState) => ({
                    ...prevState,
                    contactList: [...prevState.contactList, contactDto],
                }));
                return newContact;
            } catch (e) {
                if (errorFunction) {
                    errorFunction('Error creating contact');
                    throw e;
                }
            }

        }
        createLocal().then(() => {
            if (completionFunction) {
                completionFunction();
            }
        });
    }
    function updateContact(contactRec: Contact, completionFunction: () => void, errorFunction?: (message: string) => void) {
        async function updateLocal(){
            try {
                await updateContactAction(contactRec);
                const contactDto: ContactDto = {
                    id: contactRec.id,
                    firstName: contactRec.firstName,
                    lastName: contactRec.lastName,
                };
                setContactState((prevState:ContactState) => ({
                    ...prevState,
                    contactList: prevState.contactList.map((contact) => {
                        if (contact.id === contactRec.id) {
                            return contactDto;
                        }
                        return contact;
                    }),
                }));
            } catch (e) {
                if (errorFunction) {
                    errorFunction('Error updating contact');
                    throw e;
                }
            }
        }
        updateLocal().then(() => {
            if (completionFunction) {
                completionFunction();
            }
        });
    }

    function deleteContact(id: number, completionFunction: () => void, errorFunction?: (message: string) => void) {
        async function deleteLocal(){
            try{
                await deleteContactAction(id);
                setContactState((prevState:ContactState) => ({
                    ...prevState,
                    contactList: prevState.contactList.filter((contact) => contact.id !== id),
                }));
                return null;
            } catch (e) {
                if (errorFunction) {
                    errorFunction('Error deleting contact');
                    throw e;
                }
            }


        }
        deleteLocal().then(() => {
            if (completionFunction) {
                completionFunction();
            }
        });
    }
    const value = {
        contactState,
        setContactState,
        createContact,
        updateContact,
        deleteContact
    }
    return (
        <ContactDataContext.Provider value={value}>
            {children}
        </ContactDataContext.Provider>
    );
};

export function useContactDataContext() {
    const context = React.useContext(ContactDataContext);
    if (context === undefined) {
        throw new Error('useContactDataContext must be used within a ContactDataProvider');
    }
    return context;
}