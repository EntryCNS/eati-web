import React, { useState } from "react";
import * as S from "./style";
import mainCharacterImg from "../../asset/main.png";
import caution from '../../asset/ caution.svg'
import backbutton from "../../asset/back.svg";
import { useNavigate } from "react-router-dom";

const CreatingGroup = () => {
  const navigate = useNavigate();

  function handleBackButton() {
    navigate("/");
  }

  function handleExitButton() {
    navigate("/")
  }

  const [isOpen, setIsOpen] = useState(false)

  const openPopup = () => setIsOpen(true)
  const closePopup = () => setIsOpen(false)

  return (
    <div>
      <S.backbutton src={backbutton} onClick={handleBackButton}></S.backbutton>
      <S.SelectKeyword>키워드 고르는 중...</S.SelectKeyword>
      <S.MainCharacterContainer>
        <S.MainCharacter src={mainCharacterImg}></S.MainCharacter>
      </S.MainCharacterContainer>
      <div>
        <S.selectedKeyword>선택한 키워드</S.selectedKeyword>
      </div>
      <S.exitButtonContainer>
        <S.exitButton className="primary" onClick={openPopup}>
          나가기
        </S.exitButton>
        {isOpen && (
          <S.OverLay>
            <S.PopupContainer>
              <S.cautionImg src={caution}></S.cautionImg>
              <S.Title>추천 서비스를 <span style={{color:'#FF491B', fontFamily: 'yg-jalnan'}}>취소</span>하고 나가시겠습니까?</S.Title>
              <S.Content>
                선택한 내용들은 모두 초기화 됩니다.
              </S.Content>
              <S.ButtonContainer>
                <S.cancellationButton className='secondary' onClick={closePopup}>
                  취소
                </S.cancellationButton> 
                <S.checkButton className='secondary' onClick={handleExitButton}>
                  확인
                </S.checkButton>
              </S.ButtonContainer>
            </S.PopupContainer>
          </S.OverLay>
        )}
      </S.exitButtonContainer>
    </div>
  );
};

export default CreatingGroup;
