"use client";
import React from "react";

import ContactModalHeader from "@/app/contacts/contact-modal/contact-modal-header";
import ContactModalBody from "@/app/contacts/contact-modal/contact-modal-body";
import ContactModalFooter from "@/app/contacts/contact-modal/contact-modal-footer";
import {useContactModalContext} from "@/contexts/contact-modal-context";

export default function ContactModal() {
    const {modalShow} = useContactModalContext();
    const cssShowHide = modalShow && modalShow ? "modal show-modal has-backdrop" : "modal hide-modal";
    return (
        <div role={"dialog"} className={cssShowHide}>
            <div className={"modal-dialog modal-dialog-centered"}>
                <div className={"modal-content border-0"}>
                    <ContactModalHeader/>
                    <ContactModalBody/>
                    <ContactModalFooter/>
                </div>
            </div>
        </div>
    )
}
