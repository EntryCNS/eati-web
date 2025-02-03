import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const StoreInfo = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`/api/products/${id}`);
            const data = await response.json();
            setProduct(data);

            // 임시 데이터
            const mockData = [
                { id: 1, name: 'Product A', description: 'This is Product A', img: 'img 1' },
                { id: 2, name: 'Product B', description: 'This is Product B' },
                { id: 3, name: 'Product C', description: 'This is Product C' },
            ];

            const foundProduct = mockData.find((item) => item.id === parseInt(id));
            setProduct(foundProduct);
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <img src={product.img} alt="img" />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    );
};


export default StoreInfo
