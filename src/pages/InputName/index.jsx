import React, { useState } from 'react'
import * as S from './style'
import Button from '../../components/common/button'
import { useNavigate } from 'react-router-dom'

const InputName = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleNameSubmit = () => {
        if (name.trim() === '') {
            alert('이름을 입력해주세요.');
        } else {
            navigate('/main')
        }
    }

    return (
        <>
            <form action="">
                <S.Background>
                    <S.SubTitleBox>
                        <S.SubTitle>혼밥은 이제 그만!</S.SubTitle>
                        <S.SubTitle2>당신의 밥 친구들을 모아보세요</S.SubTitle2>
                    </S.SubTitleBox>
                    <S.TitleBox>
                        <S.Title>EATI</S.Title>
                        <S.Title2>잇티</S.Title2>
                    </S.TitleBox>
                    <S.InputBox>
                        <S.Input
                            type='text'
                            placeholder='이름을 입력하세요'
                            value={name} 
                            onChange={(e) => setName(e.target.value)}/>
                    </S.InputBox>
                </S.Background>
                <Button text={"시작하기"} location={"/"} onClick={handleNameSubmit} />
            </form>
        </>
    )
}

export default InputName
