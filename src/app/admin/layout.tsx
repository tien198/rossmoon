import { PropsWithChildren } from "react";
import Nav from "./comps/Nav";

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex">
            <Nav />
            {/* Main Content */}
            <main className="flex-1 p-6 overflow-y-auto h-screen">
                {children}
            </main>
        </div>
    )
}