import { FormEvent, HTMLInputTypeAttribute, useEffect, useRef } from "react";

type InputProps = { name: string; value?: string | null; type?: HTMLInputTypeAttribute, className?: string, isCurrency?: boolean }
function Input({ name, value, type, className, isCurrency }: InputProps) {
    return <label className={"flex justify-between items-center flex-wrap w-full hover:bg-gray-300 p-4 rounded-sm" + (className ?? '')}>
        <strong>{name}:</strong>
        <span className=" text-gray-700">
            <input
                name={name}
                type={type ?? 'text'}
                value={value || ''}
                className="px-4 py-1 outline-0 text-right focus:shadow shadow-amber-800"
            /> {isCurrency && '₫'}
        </span>
    </label>
}

type TextAreaProps = { name: string; value?: string | null; className?: string }
function TextArea({ name, value, className }: TextAreaProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    useEffect(() => {
        const areaEl = textAreaRef.current!
        areaEl.style.height = areaEl.scrollHeight.toString() + 'px'
    })
    const handleInput = () => {
        const areaEl = textAreaRef.current!
        areaEl.style.height = 'auto'
        areaEl.style.height = areaEl.scrollHeight.toString() + 'px'
    }

    return <label className={"flex justify-between items-center flex-wrap w-full hover:bg-gray-300 p-4 rounded-sm" + (className ?? '')}>
        <strong>{name}:</strong>
        <span className="leading-relaxed text-gray-700 w-full">
            <textarea
                onInput={handleInput}
                ref={textAreaRef}
                name={name}
                defaultValue={value || ''}
                className="w-full px-4 py-2 outline-0 overflow-clip focus:shadow shadow-amber-800"
            />
        </span>
    </label>
}

const F = {
    Input, TextArea
}

export default F