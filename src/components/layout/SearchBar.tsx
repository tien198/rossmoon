export default function SearchBar() {
    return <div className="px-4 pb-3 md:hidden">
        <form action="" method="get">
            <input
                type="text"
                placeholder='Tìm "túi Express"'
                className="w-full border border-gray-300 rounded-full px-5 py-3 text-gray-500 outline-none focus:border-black"
            />
            <button hidden>Gửi</button>
        </form>
    </div>
}