'use client'

import HeaderButtons from "./Header.Buttons";
import Nav from "./Navbar/Nav";
import { useState } from "react";



export default function Header() {
    const [isNavActive, setNavActive] = useState(false)

    const handleNavActive = () => setNavActive(prev => !prev)

    return (
        <>
            <header>
                <div className="h-16 md:h-20"></div>
                <div className="fixed top-0 left-0 h-16 md:h-20">
                    <div
                        className={"fixed z-30 opacity-70 inset-0 bg-black "
                            + (isNavActive ? '' : 'hidden')
                        }
                        onClick={handleNavActive}
                    ></div >
                    <HeaderButtons isNavActive={isNavActive} handleNavActive={handleNavActive} />
                    <Nav isActive={isNavActive} />
                </div>
            </header >
        </>
    )
}