import React, { useEffect, useState } from 'react'
import * as S from './style'
import Stores from '../../components/Stores/Menu/index'
import backbtn from '../../asset/back.svg'
import { Link, useNavigate } from 'react-router-dom'

const StoreReco = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]); // API에서 가져온 데이터 저장
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태

    function handleBackButton() {
        navigate("/");
    }

    // const products = [ // 임시 데이터
    //     { id: 1, name: 'Product A' },
    //     { id: 2, name: 'Product B' },
    //     { id: 3, name: 'Product C' },
    // ];

    const mainApi = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch(`api url`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(),
            });

            if (!response.ok) {
                throw new Error('데이터를 불러오는 데 실패했습니다.');
            }

            const result = await response.json();
            setProducts(result)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        mainApi();
    }, []);

    return (
        <>
            <S.Back src={backbtn} alt="뒤로가기" onClick={handleBackButton} />
            {isLoading && <p>로딩중....</p>}
            
            <S.Title>이런 음식은 어때요?</S.Title>
            {!isLoading && !error && products.length === 0 && <p>추천할 음식이 없습니다.</p>}
            {error && <p>{error}</p>}

            {products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} style={{textDecoration: "none"}}>
                    <Stores data={product} />
                </Link>
            ))}
        </>
    )
}

export default StoreReco
