import React from 'react';

const ProductFeatures: React.FC<{ features: string[] | undefined }> = ({ features }) => {
    return (
        <div className='p-4 hover:bg-gray-300'>
            <h2 className="text-lg font-semibold mb-2">Đặc điểm nổi bật</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
                {features?.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductFeatures;
