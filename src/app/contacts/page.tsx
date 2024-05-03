import Header from "@/app/header";
import Nav from "@/app/nav";
import {Suspense} from "react";
import ContactListContainer from "@/app/contacts/contact-list-container";
import Footer from "@/app/footer";

export default function Contacts() {
    return (
        <div className={"container"}>
            <Header/>
            <div className={"full-page-border app-content-background"}>
                <Nav/>
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactListContainer/>
                </Suspense>

            </div>
            <Footer/>
        </div>
    )
}