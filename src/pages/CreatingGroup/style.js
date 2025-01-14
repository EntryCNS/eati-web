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
    margin-top: 80px;
    border: none;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center; /* 텍스트 가로 정렬 */
    line-height: normal; /* line-height 초기화 */
    padding: 0; /* 기본 패딩 제거 */
`