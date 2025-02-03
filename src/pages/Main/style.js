import styled from "styled-components";

export const main = styled.div`
  height: 135vh;
`

export const container = styled.div`
  height: 130vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const searchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 500px;
  height: 6vh;
  border: 0.5px solid #919191;
  border-radius: 25px;
`

export const searchInputBox = styled.input`
  border: none;
  background-color: transparent;
  width: 420px;
  height: 6vh;
  font-size: 1rem;
  outline: none;
`

export const searchingMagnifyingGlass = styled.img`
  width: 20px;
`

export const texts = styled.p`
  color: #FF643D;
  font-weight: bold;
  font-size: 1.4rem;
  text-align: left;
`

export const textsBox = styled.div`
  width: 500px;
`

export const makeGroupBtn = styled.button`
  width: 500px;
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
  width: 500px;
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
  width: 600px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const modalContent = styled.div`
  width: 500px;
  height: 250px;
`

export const shareCodeBoxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  height: 50px;
  border: 1px #000 solid;
  border-radius: 30px;
`

export const shareCodeBox = styled.input`
  width: 320px;
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

export const restaurantsBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px 30px;
  overflow-x: auto;
  width: 100%;
  height: 500px;
  padding: 0px 50px;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const restaurant = styled.div`
  flex: 0 0 auto;
  width: 320px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const restaurantLocationBox = styled.div`
  border: 1px solid #DADCE0;
  background-color: #F3F3F3;
  width: 60px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 15px;
`

export const restaurantName = styled.p`
  font-weight: 500;
  font-size: 1.7rem;
`

export const restaurantImg = styled.img`
  width: 50%;
  height: 100px;
  border-radius: 20px 0px 0px 0px;
`

export const restaurantLocationImg = styled.img`
  width: 50%;
  height: 100px;
  border-radius: 0px 20px 0px 0px;
`

export const restaurantInfoBox = styled.div`
  width: 90%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
