import React from 'react'
import * as S from './style'
import Foods from '../Foods/index'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <S.Container>
                <S.Menus>
                    <Foods />
                    <Foods />
                    <Foods />
                    <Foods />
                </S.Menus>
                <S.StoreName>가게이름</S.StoreName>
            </S.Container>
            <S.Border />
        </>
    )
}

export default Menu
