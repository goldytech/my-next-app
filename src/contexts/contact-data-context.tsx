"use client";
import React, {createContext, ReactNode} from "react";
import {ContactList} from "@/lib/general-types";
import {getContactListDataFromAction} from "@/contexts/contact-data-context-actions";


type ContactState = {
    contactList: Array<ContactList>;
};


interface ContactDataContextProps {
    contactState: ContactState;
    // getContactListData: (completionFunction: () => void, errorFunction?: (message: string) => void) => void;
}

const ContactDataContext: React.Context<ContactDataContextProps | undefined> = createContext<ContactDataContextProps | undefined>(undefined);

export const ContactDataProvider = ({children,contactListInit}: { children: ReactNode,contactListInit:Array<ContactList> }) => {
    const initialState: ContactState = {
        contactList: contactListInit
    };
    const [contactState, setContactState] = React.useState<ContactState>(initialState);
    // const getContactListData = async (completionFunction: () => void, errorFunction?: (message: string) => void) => {
    //     try {
    //         const contactListData: Array<ContactList> = await getContactListDataFromAction();
    //         completionFunction();
    //     } catch (error) {
    //         errorFunction && errorFunction((error as Error).message);
    //     }
    // };
    const value = {
         contactState,
        // getContactListData
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