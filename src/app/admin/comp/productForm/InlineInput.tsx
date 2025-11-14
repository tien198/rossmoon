import type { AppInpBase } from '.';

import { InputHTMLAttributes, useEffect, useRef } from 'react';

type Props = AppInpBase & InputHTMLAttributes<HTMLInputElement>

export default function InlineInput({ displayName, suffix, className, ...rest }: Props) {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        const suffixEl = document.createElement('span')
        suffixEl.textContent = suffix || ''
        suffixEl.style.right = '0px'
        suffixEl.style.position = 'absolute'
        inputRef.current?.before(suffixEl)
    }, [])

    return <label
        className='flex gap-4 items-center w-full hover:bg-gray-300 p-4 rounded-sm relative'
    >
        <strong>{displayName ?? rest.name}:</strong>
        <span className=' text-gray-700'>
            <input ref={inputRef}
                placeholder='?'
                className={
                    'w-full px-4 py-1 outline-0 '
                    + (rest.disabled ? '' : 'border-b border-transparent focus:border-b focus:border-b-amber-800 ')
                    + className
                }
                {...rest}
            />
        </span>
    </label>
}