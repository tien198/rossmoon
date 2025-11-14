import type { AppInpBase } from '.';

import { InputHTMLAttributes, useEffect, useRef } from 'react';

type InputProps = AppInpBase & InputHTMLAttributes<HTMLInputElement>

export default function Input({ displayName, suffix, className, ...rest }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        const suffixEl = document.createElement('span')
        suffixEl.textContent = suffix || ''
        suffixEl.style.right = '0px'
        suffixEl.style.position = 'absolute'
        inputRef.current?.before(suffixEl)
    }, [])

    return <label
        className='flex gap-4 justify-between items-center flex-wrap w-full hover:bg-gray-300 p-4 rounded-sm'
    >
        <strong>{displayName ?? rest.name}:</strong>
        <span className='flex-1 text-gray-700 relative'>
            <input ref={inputRef}
                placeholder='?'
                className={
                    'w-full px-4 py-1 outline-0 text-right '
                    + (rest.disabled ? '' : 'border-b border-transparent focus:border-b focus:border-b-amber-800 ')
                    + className
                }
                {...rest}
            />
        </span>
    </label>
}