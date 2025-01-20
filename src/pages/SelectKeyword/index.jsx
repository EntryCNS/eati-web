import React, { useState } from "react";
import * as S from "./style";
import backbutton from "../../asset/back.svg";
import { useNavigate } from "react-router-dom";
import { FLAVOR } from "../../constants/keyword/flavor";
import { KIND } from "../../constants/keyword/kind";
import { OTHERS } from "../../constants/keyword/others";
import Button from "../../components/common";

const SelectKeyword = () => {
  const navigate = useNavigate();


  // 상태 초기화: 각 카테고리는 빈 배열로 시작 (여러 개 선택 가능)
  const [selectedKeywords, setSelectedKeywords] = useState({
    flavor: [],
    kind: [],
    others: [],
  });

  // 뒤로 가기 버튼 처리
  function handleBackButton() {
    navigate("/");
  }

  // 버튼 클릭 시, 해당 키워드 정보 추가/삭제
  function handleKeywordClick(type, keyword) {
    setSelectedKeywords((prev) => {
      const newKeywords = { ...prev };
      // 키워드가 이미 선택되어 있으면 취소, 아니면 추가
      if (newKeywords[type].includes(keyword)) {
        // 이미 선택된 키워드는 삭제
        newKeywords[type] = newKeywords[type].filter((item) => item !== keyword);
      } else {
        // 선택되지 않은 키워드는 추가
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
              isClicked={selectedKeywords.flavor.includes(data.name)} // isClicked가 상태에 맞춰 변경
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
              isClicked={selectedKeywords.kind.includes(data.name)} // 동일하게 상태에 맞춰 변경
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
              isClicked={selectedKeywords.others.includes(data.name)} // 동일하게 상태에 맞춰 변경
              onClick={() => handleKeywordClick("others", data.name)}
            >
              {data.name}
            </S.KeywordButton>
          ))}
        </S.KeywordButtonContainer>
      </div>
      <Button />
    </div>
  );
};

export default SelectKeyword;
