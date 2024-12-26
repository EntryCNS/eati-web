import React from "react";
import * as S from "./style";

const SelectKeyword = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default SelectKeyword;
