import React from 'react'
import test from '../../../asset/food.png'
import * as S from './style'

const Foods = () => {
    return (
        <S.Container>
            <S.Image src={test} alt="이미지" />
            <S.Name>메뉴 이름</S.Name>
            <S.Price>가격</S.Price>
        </S.Container>
    )
}

export default Foods
