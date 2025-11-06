import { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { AppInpBase } from '.';

type TextAreaProps = AppInpBase & TextareaHTMLAttributes<HTMLTextAreaElement>

export default function TextArea({ displayName, suffix, className, ...rest }: TextAreaProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    useEffect(() => {
        const areaEl = textAreaRef.current!
        areaEl.style.height = areaEl.scrollHeight.toString() + 'px'
    })
    useEffect(() => {
        const suffixEl = document.createElement('span')
        suffixEl.textContent = suffix || ''
        suffixEl.style.right = '0px'
        suffixEl.style.position = 'absolute'
        textAreaRef.current?.before(suffixEl)

    })
    const handleInput = () => {
        const areaEl = textAreaRef.current!
        areaEl.style.height = 'auto'
        areaEl.style.height = areaEl.scrollHeight.toString() + 'px'
    }

    return <label className={'flex justify-between items-center flex-wrap w-full relative hover:bg-gray-300 p-4 rounded-sm'}>
        <strong>{displayName ?? rest.name}:</strong>
        <span className='leading-relaxed text-gray-700 w-full'>
            <textarea ref={textAreaRef}
                name={rest.name}
                placeholder='?'
                className={'w-full px-4 py-2 outline-0 overflow-hidden rounded-sm '
                    + (rest.disabled ? ' ' : 'border border-transparent focus:border focus:border-amber-800 ')
                    + className
                }
                {...rest}
                onInput={handleInput}
            />
        </span>
    </label>
}