import React from "react";
import * as S from "./style";
import backbutton from '../../asset/back.svg'
import { Navigate, useNavigate } from "react-router-dom";

const SelectKeyword = () => {
  const navigate = useNavigate();

  function handleClick(){
    navigate('/')
  }

  return (
    <div>
      <S.backbutton src={backbutton} onClick={handleClick}></S.backbutton>
      <div>
        <S.FoodQuestion>어떤 음식을 원하시나요?</S.FoodQuestion>
        <S.RestaurantRecommendations>
          정해진 키워드에 맞춰 식당을 추천해드려요
        </S.RestaurantRecommendations>
      </div>
      <div>
        <S.Keyword>맛</S.Keyword>
        <hr
          style={{
            border: "none",
            height: "1px",
            backgroundColor: "#979797",
            margin: "10px 40px",
          }}
        />
        <S.KeywordButtonContainer>
          <S.KeywordButton>담백한</S.KeywordButton>
          <S.KeywordButton>칼칼한</S.KeywordButton>
          <S.KeywordButton>매콤한</S.KeywordButton>
          <S.KeywordButton>고소한</S.KeywordButton>
          <S.KeywordButton>짭짤한</S.KeywordButton>
          <S.KeywordButton>얼큰한</S.KeywordButton>
          <S.KeywordButton>시원한</S.KeywordButton>
          <S.KeywordButton>새콤한</S.KeywordButton>
          <S.KeywordButton>달달한</S.KeywordButton>
          <S.KeywordButton>쌉쌀한</S.KeywordButton>
        </S.KeywordButtonContainer>
      </div>
      <div>
        <S.Keyword>음식 종류</S.Keyword>
        <hr
          style={{
            border: "none",
            height: "1px",
            backgroundColor: "#979797",
            margin: "10px 40px",
          }}
        />
        <S.KeywordButtonContainer>
          <S.KeywordButton>양식</S.KeywordButton>
          <S.KeywordButton>중식</S.KeywordButton>
          <S.KeywordButton>한식</S.KeywordButton>
          <S.KeywordButton>일식</S.KeywordButton>
          <S.KeywordButton>브런치</S.KeywordButton>
          <S.KeywordButton>동남아</S.KeywordButton>
          <S.KeywordButton>치킨</S.KeywordButton>
          <S.KeywordButton>피자</S.KeywordButton>
          <S.KeywordButton>햄버거</S.KeywordButton>
          <S.KeywordButton>야식</S.KeywordButton>
        </S.KeywordButtonContainer>
      </div>
      <div>
        <S.Keyword>기타</S.Keyword>
        <hr
          style={{
            border: "none",
            height: "1px",
            backgroundColor: "#979797",
            margin: "10px 40px",
          }}
        />
        <S.KeywordButtonContainer>
          <S.KeywordButton>요즘 유행</S.KeywordButton>
          <S.KeywordButton>10대의</S.KeywordButton>
          <S.KeywordButton>20대의</S.KeywordButton>
          <S.KeywordButton>주차 가능한</S.KeywordButton>
        </S.KeywordButtonContainer>
      </div>
      <S.SelectButtonContainer>
        <S.SelectButton>선택 완료</S.SelectButton>
      </S.SelectButtonContainer>
    </div>
  );
};

export default SelectKeyword;
