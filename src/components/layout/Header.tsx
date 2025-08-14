import { CiMenuBurger, CiUser } from "react-icons/ci";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function Header() {
    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-screen bg-white flex items-center justify-between px-4 py-4 border-b border-gray-200 md:px-16 md:py-8">
                {/* Menu icon */}
                <div className="flex gap-3 md:gap-5">
                    <button className="flex items-end gap-4 cursor-pointer" type="button">
                        <CiMenuBurger size={20} /><span className="text-sm hidden md:inline">Menu</span>
                    </button>
                    <button className="flex items-end gap-4 cursor-pointer" type="button">
                        <HiMiniMagnifyingGlass size={20} /><span className="text-sm hidden md:inline">Tìm kiếm</span>
                    </button>
                </div>

                {/* Logo */}
                <h1 className="text-lg font-bold tracking-widest -translate-1/2 fixed left-1/2 top-7 md:top-10">LOUIS VUITTON</h1>

                {/* User icon */}
                <button className="text-xl" type="button">
                    <CiUser fontWeight={800} /><span className="hidden">user</span>
                </button>
            </header>

            {/* Search bar */}
            <div className="px-4 py-3">
                <form action="" method="get">
                    <input
                        type="text"
                        placeholder='Tìm "túi Express"'
                        className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-500 outline-none focus:border-black"
                    />
                    <button hidden>Gửi</button>
                </form>
            </div>
        </>
    )
}