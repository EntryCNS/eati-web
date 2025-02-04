import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as S from './style'

const StoreInfo = () => {
    // const { id } = useParams();
    // const [product, setProduct] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         try {
    //             const response = await fetch(`http://10.80.163.17:8080/api/restaurants/${id}`);
    //             if (!response.ok) {
    //                 throw new Error('불러오기 실패')
    //             }
    //             const data = await response.json();
    //             setProduct(data);
    //         } catch(error) {
    //             setError(error.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchProduct();
    // }, [id]);

    // if(loading) return <p>loading....</p>
    // if(error) return <p>error: {error}</p>
    // if(!product) return <p>product not found</p>

    return (
        <S.Wrap>
            <S.Title>가게이름: 블라블라가게</S.Title>
            <S.Content>
                <S.Text>가게주소: 블라블라주소</S.Text>
                <S.Text>키워드: 매콤한</S.Text>
                <S.Text>전화번호: 0803350020</S.Text>
                <S.Text>리뷰</S.Text>
                <S.Review>
                    <div style={{display: "flex", gap: "10px"}}>
                        <S.ReviewText>글쓴이</S.ReviewText>
                        <p>시간</p>
                    </div>
                    <S.ReviewText>내용내용내용내용내용내용내용내용내용내용내용내용
                        내용내용내용내용내용내용내용내용내용내용내용내용내용
                    </S.ReviewText>
                </S.Review>
            </S.Content>
        </S.Wrap>
    );
};


export default StoreInfo
