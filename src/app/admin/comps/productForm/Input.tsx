import { HTMLInputTypeAttribute } from "react";

type InputProps = {
    name: string, value?: string | null, type?: HTMLInputTypeAttribute, className?: string,
    isCurrency?: boolean,
    disable?: boolean
}

export default function Input({ name, value, type, className, isCurrency, disable }: InputProps) {
    return <label className={"flex justify-between items-center flex-wrap w-full hover:bg-gray-300 p-4 rounded-sm" + (className ?? '')}>
        <strong>{name}:</strong>
        <span className=" text-gray-700">
            <input
                name={name}
                type={type ?? 'text'}
                value={value || ''}
                className="px-4 py-1 outline-0 text-right focus:shadow shadow-amber-800"
                disabled={disable}
            /> {isCurrency && '₫'}
        </span>
    </label>
}