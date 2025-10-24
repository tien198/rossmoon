import { HTMLInputTypeAttribute, useEffect, useRef } from "react";

type Props = {
    name: string, value?: string | null, type?: HTMLInputTypeAttribute, className?: string,
    displayName?: string,
    suffix?: string,
    disable?: boolean
}

export default function InlineInput({ name, value, type, className, displayName, suffix, disable }: Props) {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        const suffixEl = document.createElement('span')
        suffixEl.textContent = suffix || ''
        suffixEl.style.right = '0px'
        suffixEl.style.position = 'absolute'
        inputRef.current?.before(suffixEl)
    }, [])
    return <label className={"flex gap-4 items-center w-full hover:bg-gray-300 p-4 rounded-sm relative" + (className ?? '')}>
        <strong>{displayName ?? name}:</strong>
        <span className=" text-gray-700">
            <input ref={inputRef}
                name={name}
                type={type ?? 'text'}
                defaultValue={value || ''}
                placeholder="???"
                className="px-4 py-1 w-full outline-0 text-right focus:shadow shadow-amber-800"
                disabled={disable}
            />
        </span>
    </label>
}