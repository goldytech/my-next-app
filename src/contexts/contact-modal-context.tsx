"use client";
import React,{createContext,ReactNode,useContext}  from "react";

interface ContactModalProps {
    modalShow: boolean;
    setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
    modalContactId: number;
    setModalContactId: React.Dispatch<React.SetStateAction<number>>;
    modalContactFirstName: string;
    setModalContactFirstName: React.Dispatch<React.SetStateAction<string>>;
    modalContactLastName: string;
    setModalContactLastName: React.Dispatch<React.SetStateAction<string>>;
    modalContactEmail: string;
    setModalContactEmail: React.Dispatch<React.SetStateAction<string>>;
}

const ContactModalContext: React.Context<ContactModalProps | undefined> = createContext<ContactModalProps | undefined>(undefined);

export const ContactModalProvider = ({children}: {children: ReactNode}) => {
    const [modalShow, setModalShow] = React.useState<boolean>(false);
    const [modalContactId, setModalContactId] = React.useState<number>(0);
    const [modalContactFirstName, setModalContactFirstName] = React.useState<string>("");
    const [modalContactLastName, setModalContactLastName] = React.useState<string>("");
    const [modalContactEmail, setModalContactEmail] = React.useState<string>("");
    const value = {
        modalShow,
        setModalShow,
        modalContactId,
        setModalContactId,
        modalContactFirstName,
        setModalContactFirstName,
        modalContactLastName,
        setModalContactLastName,
        modalContactEmail,
        setModalContactEmail
    };
    return (
        <ContactModalContext.Provider value={value}>
            {children}
        </ContactModalContext.Provider>
    );
}

export const useContactModalContext = () => {
    const context = useContext(ContactModalContext);
    if (context === undefined) {
        throw new Error('useContactModalContext must be used within a ContactModalProvider');
    }
    return context;
}