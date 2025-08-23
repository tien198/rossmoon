'use client'

import { CiMenuBurger, CiUser } from "react-icons/ci";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Nav from "./Navbar/Nav";
import { useState } from "react";

export default function Header() {
    const [isNavActive, setNavActive] = useState(false)

    const handleNavActive = () => setNavActive(prev => !prev)

    return (
        <>
            <header>
                <div className="fixed top-0 left-0 h-16 md:h-20">
                    <div className="w-screen bg-white 
                        flex items-center justify-between border-b border-b-gray-700
                        px-4 h-16
                        md:px-16 md:h-20"
                    >
                        {/* Menu icon */}
                        <div className="z-50 flex items-center gap-3 md:gap-5">
                            <button
                                className="flex items-end gap-4 cursor-pointer" type="button"
                                onClick={handleNavActive}
                            >
                                <CiMenuBurger size={20} /><span className="text-sm hidden md:inline">Menu</span>
                            </button>
                            <button className={
                                "cursor-pointer "
                                + (isNavActive ? 'md:hidden ' : 'hidden md:flex items-end gap-4')}
                                type="button"
                            >
                                <HiMiniMagnifyingGlass size={20} /><span className="text-sm hidden md:inline">Tìm kiếm</span>
                            </button>
                        </div>

                        {/* Logo */}
                        <div className="ojuju text-3xl h-full
                            z-50 md:z-0">
                            <h1 className="-translate-1/2 absolute left-1/2 top-1/2">
                                ROSS MOON
                            </h1>
                        </div>

                        {/* User icon */}
                        <button className="text-xl z-50 md:z-0" type="button">
                            <CiUser fontWeight={800} /><span className="hidden">user</span>
                        </button>
                    </div>

                    <Nav isActive={isNavActive} handleActive={handleNavActive} />
                </div>
            </header >
        </>
    )
}