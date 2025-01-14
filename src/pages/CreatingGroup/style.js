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
    width: 100%; 
    height: auto;
    margin-top: 20px;
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
    text-align: center;
    line-height: normal; 
    padding: 0;
`

export const checkButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.2s;
    margin: 20px;
    border: none;
    background-color: #FF491B;
    color: white;
    width: 150px;
    height: 50px;
    font-size: 14px;
    margin-bottom: -3px;
`

export const cancellationButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.2s;
    margin: 20px;
    border: none;
    width: 150px;
    height: 50px;
    font-size: 14px;
    margin-bottom: -3px;
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
    border-radius: 2rem;
    padding: 1.5rem;
    width: 28rem;
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
    margin-bottom: 1rem;
    text-align: center;
    font-family: 'yg-jalnan', sans-serif;
`

export const Content = styled.div`
    margin-bottom: 1rem;
    text-align: center;
    margin-bottom: 25px;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
`

export const cautionImg = styled.img`
    margin-top: 10px;
    margin-bottom: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 70px;
`