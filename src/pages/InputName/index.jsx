import React from 'react'
import * as S from './style'

const InputName = () => {
    return (
        <>
            <S.Background>
                <S.SubTitleBox>
                    <S.SubTitle>혼밥은 이제 그만!</S.SubTitle>
                    <S.SubTitle2>당신의 밥 친구들을 모아보세요</S.SubTitle2>
                </S.SubTitleBox>
                <S.TitleBox>
                    <S.Title>EATI</S.Title>
                    <S.Title2>잇티</S.Title2>
                </S.TitleBox>
            </S.Background>
            <S.InputBox>
                <S.Input placeholder='이름을 입력하세요' />
            </S.InputBox>
        </>
    )
}

export default InputName
