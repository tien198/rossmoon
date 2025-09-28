import { PropsWithChildren } from "react";
import { Invalid } from "../reducer/authReducer";

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

type InputProps = { invalidMsgs?: Invalid }
    & React.InputHTMLAttributes<HTMLInputElement>

function Input(props: InputProps) {
    const { invalidMsgs, ...rest } = props
    return (
        <div>
            <input
                className="w-full px-7 py-5 rounded-sm bg-white/30 border border-white/40 focus:outline-none focus:ring-2 focus:ring-gray-950 placeholder-white"
                {...rest}
            />
            <div className="min-h-10 flex items-center text-red-800 font-bold">
                {invalidMsgs?.errors.map((msg, id) =>
                    <span className="pl-3" key={id}>{msg}</span>
                )}
            </div>
        </div>
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