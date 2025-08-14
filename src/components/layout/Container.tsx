import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
    return <div className="mx-6 md:mx-40">
        {children}
    </div>
}