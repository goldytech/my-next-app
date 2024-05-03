import Image from "next/image";
import Header from "./header";
import Nav from "./nav";
import Home from "./home";
import Footer from "./footer";

export default function HomePage() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="full-page-border app-content-background">
        <Nav />
        <Home />
      </div>
      <Footer />
    </div>
  );
}
