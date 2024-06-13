import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { Drawer } from "antd";

const PublicNavbar = () => {
    const { pathname } = useLocation();
    const [isSticky, setIsSticky] = useState(false);

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 40) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header
            className={`${isSticky && pathname === "/" ? "stick" : "navbar "} ${
                pathname !== "/" && "stick"
            } py-3 rounded-md px-6 font-roboto`}
        >
            <div className="flex items-center justify-between">
                <div>
                    <Link
                        to={"/"}
                        className="text-primaryColor text-2xl font-garamond font-bold inline-flex"
                    >
                        creative
                        <p className="text-secondaryColor ">list</p>
                    </Link>
                </div>
                <BiMenuAltRight
                    onClick={showDrawer}
                    className="text-primaryColor text-3xl cursor-pointer lg:hidden  block"
                />
                <div className="lg:flex hidden items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/blog"}>Blog</Link>
                        <Link to={"/gallery"}>Gallery</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/contact"}>Contact us</Link>
                    </ul>
                    <div className="flex items-center gap-4">
                        <Link to={"/getstart"}>
                            <button className="bg-primaryColor rounded-lg px-6 py-2 text-white">
                                Get start
                            </button>
                        </Link>
                        <Link to={"/login"}>
                            <button className="border-2 border-primaryColor rounded-lg px-6 py-2 text-primaryColor">
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Drawer placement="right" onClose={onClose} open={open}>
                <div className="flex flex-col gap-8">
                    <ul className="flex flex-col gap-8">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/blog"}>Blog</Link>
                        <Link to={"/gallery"}>Gallery</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/contact"}>Contact us</Link>
                    </ul>
                    <div className="flex flex-col gap-4">
                        <Link to={"/getstart"}>
                            <button className="bg-primaryColor rounded-lg px-6 py-2 text-white">
                                Get start
                            </button>
                        </Link>
                        <Link to={"/login"}>
                            <button className="border-2 border-primaryColor rounded-lg px-6 py-2 text-primaryColor">
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </Drawer>
        </header>
    );
};
export default PublicNavbar;
