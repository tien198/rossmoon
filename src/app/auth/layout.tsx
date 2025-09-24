import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <div className="h-screen w-screen bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')` }}>
            {children}
        </div>
    )
}