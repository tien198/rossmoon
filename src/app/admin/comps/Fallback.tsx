import { PropsWithChildren } from "react";

export default function Fallback({ children }: PropsWithChildren) {
    return <div className="h-screen flex justify-center items-center">
        {children}
    </div>
}