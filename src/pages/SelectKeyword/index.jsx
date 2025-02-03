import React, { useState } from "react";
import * as S from "./style";
import backbutton from "../../asset/back.svg";
import { useNavigate } from "react-router-dom";
import { FLAVOR } from "../../constants/keyword/flavor";
import { KIND } from "../../constants/keyword/kind";
import { OTHERS } from "../../constants/keyword/others";

const SelectKeyword = () => {
  const navigate = useNavigate();

  const [selectedKeywords, setSelectedKeywords] = useState({
    flavor: [],
    kind: [],
    others: [],
  });

  function handleCompleteSelection() {
    navigate("/creating-group", { state: { selectedKeywords } });
  }


  function handleBackButton() {
    navigate("/");
  }


  function handleKeywordClick(type, keyword) {
    setSelectedKeywords((prev) => {
      const newKeywords = { ...prev };

      if (newKeywords[type].includes(keyword)) {
        newKeywords[type] = newKeywords[type].filter((item) => item !== keyword);
      } else {
        newKeywords[type] = [...newKeywords[type], keyword];
      }
      return newKeywords;
    });
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
          {FLAVOR.map((data) => (
            <S.KeywordButton
              key={data.name}
              isClicked={selectedKeywords.flavor.includes(data.name)}
              onClick={() => handleKeywordClick("flavor", data.name)}
            >
              {data.name}
            </S.KeywordButton>
          ))}
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
          {KIND.map((data) => (
            <S.KeywordButton
              key={data.name}
              isClicked={selectedKeywords.kind.includes(data.name)}
              onClick={() => handleKeywordClick("kind", data.name)}
            >
              {data.name}
            </S.KeywordButton>
          ))}
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
          {OTHERS.map((data) => (
            <S.KeywordButton
              key={data.name}
              isClicked={selectedKeywords.others.includes(data.name)}
              onClick={() => handleKeywordClick("others", data.name)}
            >
              {data.name}
            </S.KeywordButton>
          ))}
        </S.KeywordButtonContainer>
      </div>
      <S.SelectButtonContainer>
        <S.SelectButton onClick={handleCompleteSelection}>완료</S.SelectButton>
      </S.SelectButtonContainer>
    </div>
  );
};

export default SelectKeyword;
