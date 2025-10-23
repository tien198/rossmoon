type FieldProps = { field: string; content?: string | null; className?: string }
export default function Field({ field, content, className }: FieldProps) {
    return <p className={"flex justify-between items-center flex-wrap w-full hover:bg-gray-300 p-4 rounded-sm" + (className ?? '')}>
        <strong>{field}:</strong>
        <span className="ml-3 leading-relaxed text-gray-700">{content || '...'}</span>
    </p>
}