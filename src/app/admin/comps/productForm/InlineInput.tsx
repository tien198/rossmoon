import { InputHTMLAttributes, useEffect, useRef } from "react";
import { AppInpBase } from ".";

type Props = AppInpBase & InputHTMLAttributes<HTMLInputElement>

export default function InlineInput({ displayName, suffix, ...rest }: Props) {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        const suffixEl = document.createElement('span')
        suffixEl.textContent = suffix || ''
        suffixEl.style.right = '0px'
        suffixEl.style.position = 'absolute'
        inputRef.current?.before(suffixEl)
    }, [])

    return <label
        className="flex gap-4 items-center w-full hover:bg-gray-300 p-4 rounded-sm relative"
    >
        <strong>{displayName ?? rest.name}:</strong>
        <span className=" text-gray-700">
            <input ref={inputRef}
                placeholder="???"
                className="px-4 py-1 w-full outline-0 text-right focus:shadow shadow-amber-800"
                {...rest}
            />
        </span>
    </label>
}