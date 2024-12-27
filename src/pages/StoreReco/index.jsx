import React from 'react'
import * as S from './style'
import Stores from '../../components/Stores/Menu/index'
import backbtn from '../../asset/back.svg'

const StoreReco = () => {
    return (
        <>
            <S.Back src={backbtn} alt="뒤로가기" />
            <S.Title>이런 음식은 어때요?</S.Title>
            <Stores />
            <Stores />
            <Stores />
        </>
    )
}

export default StoreReco
