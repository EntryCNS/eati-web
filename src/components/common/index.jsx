import React from 'react'
import { useNavigate } from "react-router-dom";
import * as S from './style'

const Button = () => {
  const navigate = useNavigate();

  function handleSelectButton() {
    navigate("/creating-group");
  }

  return (
    <S.SelectButtonContainer>
        <S.SelectButton onClick={handleSelectButton}>선택 완료</S.SelectButton>
    </S.SelectButtonContainer>
  )
}

export default Button