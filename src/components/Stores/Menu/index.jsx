import React from 'react'
import * as S from './style'
import Foods from '../Foods/index'

const Menu = (product) => {
    console.log(product)

    return (
        <>
            <S.Container>
                <S.Menus>
                    <Foods />
                    <Foods />
                    <Foods />
                    <Foods />
                </S.Menus>
                <S.StoreName>{product.data.name}</S.StoreName>
            </S.Container>
            <S.Border />
        </>
    )
}

export default Menu
