import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import ContactUs from "./components/Contact/ContactUs";
import { Outlet } from "react-router-dom";
import Github from "./components/Github/Github";
function Layout() {

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        <ContactUs/>
        <Github/>
        </>
    )
}
export default Layout
