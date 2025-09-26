import { PropsWithChildren } from "react";

type FormProps = React.FormHTMLAttributes<HTMLFormElement>
    & PropsWithChildren

function Form({ children, ...rest }: FormProps) {
    return (
        <form
            className="flex flex-col justify-center gap-10 h-full"
            {...rest}
        >
            {children}
        </form>
    )
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className="px-7 py-5 rounded-sm bg-white/30 border border-white/40 focus:outline-none focus:ring-2 focus:ring-gray-950 placeholder-white"
            {...props}
        />
    )
}

function Submit({ children }: PropsWithChildren) {
    return (
        <button
            type="submit"
            className="px-6 py-3 rounded-sm bg-gray-950 text-white hover:bg-white hover:text-black transition font-semibold"
        >
            {children}
        </button>
    )
}

const F = {
    Form, Input, Submit
}

export default F