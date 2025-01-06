import React from 'react'
import * as S from './style'
import mainCharacterImg from '../../asset/main.png'
import backbutton from "../../asset/back.svg";
import { useNavigate } from 'react-router-dom';

const CreatingGroup = () => {
  const navigate = useNavigate();

  function handleBackButton() {
    navigate("/");
  }
 
  return (
    <div>
      <S.backbutton src={backbutton} onClick={handleBackButton}></S.backbutton>
      <S.SelectKeyword>키워드 고르는 중...</S.SelectKeyword>
      <S.MainCharacterContainer>
        <S.MainCharacter src={mainCharacterImg}></S.MainCharacter>
      </S.MainCharacterContainer>
    </div>
  )
}

export default CreatingGroup
