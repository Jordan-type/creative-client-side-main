import React from "react";
import AuthNavbar from "./AuthNavbar";
import PublicNavbar from "./PublicNavbar";

const Navbar = ({ isAuthenticated }) => {
    return <>{isAuthenticated ? <AuthNavbar /> : <PublicNavbar />}</>;
};

export default Navbar;
