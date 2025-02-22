import styled from "styled-components";

export const SelectKeyword = styled.div`
    font-size: 20px;
    text-align: center;
    font-family: 'yg-jalnan', sans-serif;
    margin-top: 100px;
`


export const MainCharacter = styled.img`
    margin-top: 20px;
    align-items: center;
`


export const MainCharacterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`


export const backbutton = styled.img`
    margin-left: 25px;
    margin-top: 50px;
`


export const selectedKeyword = styled.div`
    font-family: 'yg-jalnan', sans-serif;
    margin-left: 30px;
    margin-top: 150px;
`


export const exitButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* 부모 컨테이너의 가로 크기 설정 */
    height: auto; /* 필요 시 높이 조정 */
    margin-top: 20px; /* 적절한 여백 추가 */
`


export const exitButton = styled.button`
    width: 170px;
    height: 50px;
    font-size: 20px;
    color: white;
    background-color: #FF633C;
    margin-top: 50px;
    border: none;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center; /* 텍스트 가로 정렬 */
    line-height: normal; /* line-height 초기화 */
    padding: 0; /* 기본 패딩 제거 */
`


export const Button = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-weight: 500;
    transition: all 0.2s;

    &.primary {
        background-color: #3b82f6;
        color: white;

        &.hover{
            background-color: #2563eb;
        }
    }

    &.secondary {
        background-color: #e5e7eb;

        &.hover{
            background-color: #d1d5db;
        }
    }
`


export const OverLay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`


export const PopupContainer = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    width: 24rem;
    position: relative;
`


export const CloseButton = styled.button`
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: #6b7280;

    &.hoer{
        color: #374151;
    }
`


export const Title = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`


export const Content = styled.div`
    margin-bottom: 1rem;
    text-align: center;
`


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center; 
    gap: 0.5rem;
`


export const cautionImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 auto 20px auto; 
  display: block;
`;

export const cancellationButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: #E2E2E2;
  font-weight: 500;
  transition: all 0.2s;
  border: none;
  font-size: 14px;
  width: 136px;
  height: 40px;
`;


export const checkButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: #FF491B;
  color: white;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  border: none;
  width: 136px;
  height: 40px;
`;


export const KeywordButton = styled.button`
  flex: 1 1 calc(20% - 10px); 
  max-width: 20%; 
  height: 4vh;
  border: none;
  border-radius: 10px;
  background-color: #FF491B;
  color: white;
  margin-left: 10px;
  font-size: 0.9em;
  cursor: pointer;
  text-align: center;
  &:hover {
    transform: scale(1.03, 1.03);
  }
`

export const KeywordButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  margin-top: 20px;
  padding-right: 40px;
  margin-left: 30px;
`;