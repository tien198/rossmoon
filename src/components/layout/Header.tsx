import { CiMenuBurger, CiUser } from "react-icons/ci";

export default function Header() {
    return (
        <>
            <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200 md:px-16 md:py-8">
                {/* Menu icon */}
                <button className="flex items-end gap-4 cursor-pointer" type="button">
                    <CiMenuBurger className="text-2xl" /><span className="text-sm">Menu</span>
                </button>

                {/* Logo */}
                <h1 className="text-lg font-bold tracking-widest">LOUIS VUITTON</h1>

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