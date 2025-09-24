'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50 text-gray-700">
            <p>{error.name}</p>
            <p className="text-4xl font-bold my-4">{error.message}</p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-gray-950 text-white rounded-lg hover:bg-white hover:text-black"
            >
                Try again
            </button>
        </div>
    );
}
