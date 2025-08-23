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
                <div className="fixed top-0 left-0 z-50 w-screen bg-white 
                    flex items-center justify-between border-b border-b-gray-700
                    px-4 h-16 border-gray-200 md:px-16 md:py-11 md:max-h-20"
                    >
                    {/* Menu icon */}
                    <div className="flex gap-3 md:gap-5">
                        <button
                            className="flex items-end gap-4 cursor-pointer" type="button"
                            onClick={handleNavActive}
                        >
                            <CiMenuBurger size={20} /><span className="text-sm hidden md:inline">Menu</span>
                        </button>
                        <button className="hidden md:flex items-end gap-4 cursor-pointer" type="button">
                            <HiMiniMagnifyingGlass size={20} /><span className="text-sm hidden md:inline">Tìm kiếm</span>
                        </button>
                    </div>

                    {/* Logo */}
                    <h1 className="ojuju text-3xl font-bold -translate-1/2 fixed left-1/2 top-7 md:top-10">ROSS MOON</h1>

                    {/* User icon */}
                    <button className="text-xl" type="button">
                        <CiUser fontWeight={800} /><span className="hidden">user</span>
                    </button>
                </div>

                <Nav isActive={isNavActive} handleActive={handleNavActive} />
            </header>
        </>
    )
}