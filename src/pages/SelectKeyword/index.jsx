import React, { useState } from "react";
import * as S from "./style";
import backbutton from "../../asset/back.svg";
import { useNavigate } from "react-router-dom";
import {FLAVOR} from '../../constants/keyword/flavor';
import {KIND} from '../../constants/keyword/kind'
import {OTHERS} from '../../constants/keyword/others'

const SelectKeyword = () => {
  const navigate = useNavigate();

  function handleBackButton() {
    navigate("/");    
  }

  function handleSelectButton() {
    navigate("/CreatingGroup");
  }

  return (
    <div>
      <S.backbutton src={backbutton} onClick={handleBackButton}></S.backbutton>
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
          {
            FLAVOR.map((data)=>(
              <S.KeywordButton>{data.name}</S.KeywordButton>
            ))
          }
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
          {
            KIND.map((data)=>(
              <S.KeywordButton>{data.name}</S.KeywordButton>
            ))
          }
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
          {
            OTHERS.map((data)=>(
              <S.KeywordButton>{data.name}</S.KeywordButton>
            ))
          }
        </S.KeywordButtonContainer>
      </div>
    </div>
  );
};

export default SelectKeyword;

