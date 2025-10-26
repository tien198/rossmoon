import { useEffect, useRef } from "react";

type TextAreaProps = {
    name: string, value?: string | null, className?: string,
    displayName?: string,
    suffix?: string,
    disable?: boolean
}

export default function TextArea({ name, value, className, displayName, suffix, disable = false }: TextAreaProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    useEffect(() => {
        const areaEl = textAreaRef.current!
        areaEl.style.height = areaEl.scrollHeight.toString() + 'px'
    })
    useEffect(()=>{
                const suffixEl = document.createElement('span')
        suffixEl.textContent = suffix || ''
        suffixEl.style.right='0px'
        suffixEl.style.position='absolute'
        textAreaRef.current?.before(suffixEl)

    })
    const handleInput = () => {
        const areaEl = textAreaRef.current!
        areaEl.style.height = 'auto'
        areaEl.style.height = areaEl.scrollHeight.toString() + 'px'
    }

    return <label className={"flex justify-between items-center flex-wrap w-full relative hover:bg-gray-300 p-4 rounded-sm" + (className ?? '')}>
        <strong>{displayName ?? name}:</strong>
        <span className="leading-relaxed text-gray-700 w-full">
            <textarea ref={textAreaRef}
                onInput={handleInput}
                name={name}
                defaultValue={value || ''}
                className="w-full px-4 py-2 outline-0 overflow-clip focus:shadow shadow-amber-800"
                disabled={disable}
            />
        </span>
    </label>
}