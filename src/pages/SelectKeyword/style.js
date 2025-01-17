import styled from "styled-components";

export const backbutton = styled.img`
  margin-left: 25px;
  margin-top: 50px;
`

export const FoodQuestion = styled.div`
  font-size: 1.6em;
  margin-left: 40px;
  padding-top: 40px;
  font-family: 'yg-jalnan', sans-serif;
`

export const RestaurantRecommendations = styled.div`
  font-size: 1.1em;
  margin-left: 40px;
  margin-top: 15px;
  font-family: 'yg-jalnan', sans-serif;
`
export const Keyword = styled.div`
  margin-left: 40px;
  font-size: 1.2em;
  font-family: Pretendard;
  margin-top: 40px;
  color: #979797;
  font-weight: bold;
`
export const KeywordButton = styled.button`
  border-radius: 10px;
  width: 6vw;
  height: 5vh;
  border: none;
  font-size: 0.9em;
  background-color: ${(props) => (props.isClicked ? "#FF491B" : "#FFDCD4")};
  cursor: pointer;
  &:hover {
    transform:scale(1.03,1.03);
  }
`

export const KeywordButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`