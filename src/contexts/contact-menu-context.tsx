"use client";
import React, {createContext, useContext, useState, ReactNode} from "react";

interface ContactMenuContextProps {
    searchTxt: string;
    setSearchTxt: React.Dispatch<React.SetStateAction<string>>;
}
const ContactMenuContext: React.Context<ContactMenuContextProps | undefined> = createContext<ContactMenuContextProps | undefined>(undefined);

export default function ContactMenuProvider({children}: {children: ReactNode}) {
    const [searchTxt, setSearchTxt] = useState<string>("");
    const value = {
        searchTxt,
        setSearchTxt
    };
    return (
        <ContactMenuContext.Provider value={value}>
            {children}
        </ContactMenuContext.Provider>
    );
}

export const useContactMenuContext = () => {
    const context = useContext(ContactMenuContext);
    if (context === undefined) {
        throw new Error('useContactMenuContext must be used within a ContactMenuProvider');
    }
    return context;
}