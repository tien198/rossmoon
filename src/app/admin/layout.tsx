import { PropsWithChildren } from "react";
import Nav from "./comps/Nav";

export const revalidate = false

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex max-w-screen">
            <Nav />
            {/* Main Content */}
            <main className="flex-1 shrink-[1] min-w-[0px] overflow-auto h-screen">
                {children}
            </main>
        </div>
    )
}