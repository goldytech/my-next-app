import Header from "@/app/header";
import Nav from "@/app/nav";
import {Suspense} from "react";
import ContactListContainer from "@/app/contacts/contact-list-container";
import Footer from "@/app/footer";
import ContactMenuProvider from "@/contexts/contact-menu-context";
import {ContactModalProvider} from "@/contexts/contact-modal-context";

export default function Contacts() {
    return (
        <div className={"container"}>
            <Header/>
            <div className={"full-page-border app-content-background"}>
                <ContactMenuProvider>
                    <ContactModalProvider>
                        <Nav/>
                        <Suspense fallback={<div>Loading...</div>}>
                            <ContactListContainer/>
                        </Suspense>
                    </ContactModalProvider>
                </ContactMenuProvider>
            </div>
            <Footer/>
        </div>
    )
}