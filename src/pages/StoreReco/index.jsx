import React, { useState } from 'react'
import * as S from './style'
import Stores from '../../components/stores/menu/index'
import backbtn from '../../asset/back.svg'
import { Link } from 'react-router-dom'

const StoreReco = () => {
    const [isData, setIsData] = useState();

    const products = [ // 임시 데이터
        // { id: 1, name: 'Product A' },
        // { id: 2, name: 'Product B' },
        // { id: 3, name: 'Product C' },
    ];

    const mainApi = async () => {
        setIsData(true);
        try {
            const response = await fetch(`api url`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(),
            });

            const result = await response.json();
            console.log('mainData', result);
            setIsData(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
        } catch (error) {
            window.alert(error);
        }
    };

    return (
        <>
            <S.Back src={backbtn} alt="뒤로가기" />
            {isData ? <p>데이터를 불러오지 못했습니다.</p> : null}
            <S.Title>이런 음식은 어때요?</S.Title>
            {products.map((product) => (
                <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
                    <Stores />
                </Link>
            ))}
        </>
    )
}

export default StoreReco
