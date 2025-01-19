import React from 'react'
import { useNavigate } from "react-router-dom";
import * as S from './style'

const Button = ({ text, location, onClick }) => {
  const navigate = useNavigate();

  function handleSelectButton(e) {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else {
      navigate(location);
    }
  }

  return (
    <S.SelectButtonContainer>
      <S.SelectButton onClick={handleSelectButton}>{text}</S.SelectButton>
    </S.SelectButtonContainer>
  )
}

export default Button