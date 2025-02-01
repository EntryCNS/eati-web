import styled from "styled-components";

export const main = styled.div`
  height: 115vh;
`

export const container = styled.div`
  height: 115vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const searchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 28vw;
  height: 6vh;
  border: 0.5px solid #919191;
  border-radius: 25px;
`

export const searchInputBox = styled.input`
  border: none;
  background-color: transparent;
  width: 23vw;
  height: 6vh;
  font-size: 1rem;
  outline: none;
`

export const searchingMagnifyingGlass = styled.img`
  width: 1.5vw;
`

export const texts = styled.p`
  color: #FF643D;
  font-weight: bold;
  font-size: 1.4rem;
  text-align: left;
`

export const textsBox = styled.div`
  width: 400px;
`

export const restaurantsBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;  /* 아이템들이 한 줄로 배치되도록 설정 */
  gap: 16px;          /* 각 아이템 사이의 간격 */
  overflow-x: auto;   /* 가로 스크롤이 가능하도록 설정 */
  width: 100%;        /* 전체 가로폭을 사용하도록 설정 */
  height: 400px;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const restaurant = styled.div`
  flex: 0 0 auto;     /* 아이템들이 늘어나지 않도록 설정 */
  min-width: 250px;   /* 최소 너비 설정 */
  max-width: 300px;   /* 최대 너비 설정 */
  height: 140px;
  border-radius: 10px;
  box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.1);
`


export const makeGroupBtn = styled.button`
  width: 28vw;
  height: 7vh;
  background-color: #FF633C;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  position: fixed;
  bottom: 60px;
`

export const modalCloseButtonBox = styled.div`
  width: 400px;
  display: flex;
  justify-content: right;
`

export const modalCloseButton = styled.button`
  cursor: pointer;
  width: 130px;
  height: 35px;
  color: white;
  background-color: #FF633C;
  border: none;
  border-radius: 20px;
`

export const modalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: end;
  backdrop-filter: blur(3px);
`

export const wrap = styled.div`
  background-color: #fff;
  border: #AEACAC 1px solid;
  border-radius: 20px 20px 0px 0px;
  width: 480px;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const modalContent = styled.div`
  width: 400px;
  height: 250px;
`

export const shareCodeBoxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 50px;
  border: 1px #000 solid;
  border-radius: 30px;
`

export const shareCodeBox = styled.input`
  width: 250px;
  height: 45px;
  border: none;
  outline: none;
  color: #FF491B;
  font-size: 1.1rem;
  caret-color: transparent;
`

export const shareCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80px;
`

export const shareBtn = styled.img`
  cursor: pointer;
  width: 30px;
`

export const copyBtn = styled.img`
  cursor: pointer;
  width: 30px;
`