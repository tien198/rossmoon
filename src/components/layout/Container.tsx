import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
    return <div className="mx-6 md:mx-16">
        {children}
    </div>
}