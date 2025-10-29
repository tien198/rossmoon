import { Z_Invalid } from "@/types/zod.ErrorTree";
import { PropsWithChildren } from "react";

type FormProps = React.FormHTMLAttributes<HTMLFormElement>
    & PropsWithChildren

function Form({ children, ...rest }: FormProps) {
    return (
        <form
            className="flex flex-col justify-center gap-6 h-full "
            {...rest}
        >
            {children}
        </form>
    )
}

type InputProps = { invalid?: Z_Invalid }
    & React.InputHTMLAttributes<HTMLInputElement>

function Input(props: InputProps) {
    const { invalid, ...rest } = props
    return (
        <div>
            <input
                className="w-full px-7 py-5 rounded-sm bg-white/30 border border-white/40 focus:outline-none focus:ring-2 focus:ring-gray-950 placeholder-white"
                {...rest}
            />
            <div className="min-h-10 flex items-center text-red-800 font-bold">
                {invalid?.errors.map((msg, id) =>
                    <span className="pl-3 capitalize" key={id}>{msg}</span>
                )}
            </div>
        </div>
    )
}

type SubmitProps = PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>
function Submit(props: SubmitProps) {
    const { children, ...rest } = props
    return (
        <button
            type="submit"
            className="px-6 py-3 rounded-sm bg-gray-950 text-white hover:bg-white hover:text-black transition font-semibold"
            {...rest}
        >
            {children}
        </button>
    )
}

const F = {
    Form, Input, Submit
}

export default F