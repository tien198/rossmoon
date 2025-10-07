import { PropsWithChildren } from "react";
import Nav from "./comps/Nav";

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex max-w-screen">
            <Nav />
            {/* Main Content */}
            <main className="flex-1 shrink-[1] min-w-[0px] overflow-y-auto h-screen">
                <div className="p-6">
                    {children}
                </div>
            </main>
        </div>
    )
}