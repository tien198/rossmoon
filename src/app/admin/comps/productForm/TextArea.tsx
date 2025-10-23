import { useEffect, useRef } from "react";

type TextAreaProps = {
    name: string, value?: string | null, className?: string,
    disable?: boolean
}

export default function TextArea({ name, value, className, disable = false }: TextAreaProps) {
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
                disabled={disable}
            />
        </span>
    </label>
}