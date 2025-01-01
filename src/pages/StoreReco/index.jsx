import React from 'react'
import * as S from './style'
import Stores from '../../components/Stores/Menu/index'
import backbtn from '../../asset/back.svg'
import { Link } from 'react-router-dom'


const StoreReco = () => {
    const products = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' },
    ];

    return (
        <>
            <S.Back src={backbtn} alt="뒤로가기" />
            <S.Title>이런 음식은 어때요?</S.Title>
            {products.map((product) => (
                    <Link to={`/product/${product.id}`} style={{textDecoration: "none"}}>
                        <Stores />
                    </Link>
            ))}
        </>
    )
}

export default StoreReco
