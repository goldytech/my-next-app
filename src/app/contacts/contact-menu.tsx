"use client";
import React from "react";
import {useContactMenuContext} from "@/contexts/contact-menu-context";
import ContactDialogAdd from "@/app/contacts/contact-dialog-add";

export default function ContactMenu() {
    const {searchTxt,setSearchTxt} = useContactMenuContext();
    return (
        <div className={"btn-toolbar"} role={"toolbar"} aria-label={"contact filter toolbar"}>
            <div className={"toolbar-trigger mb-3 p-1"}>
                <div className={"toolbar-search"}>
                    <input value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} type={"text"}
                           className={"form-control"} placeholder={"Search Contacts"}/>
                </div>
                <div className={"input-group"}>
                    <ContactDialogAdd/>
                </div>
            </div>
        </div>

    )
}
