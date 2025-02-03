import styled from "styled-components";

const theme = {
    colors: {
        primary: '#FF643E',
        white: '#FFFFFF',
        gray: '#A5A5A5'
    }
}

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    margin-bottom: 7rem;
    height: 60vh;
    background-image: linear-gradient(
        to bottom, 
        ${theme.colors.primary} 0%, 
        #FFA892 50%, 
        #f8f9fa 95%
    );
`

export const SubTitleBox = styled.div`
    margin-bottom: 70px;
    padding: 5px;
`

export const SubTitle = styled.h3`
    color: ${theme.colors.white};
    font-family: 'yg-jalnan';
`

export const SubTitle2 = styled.h2`
    color: ${theme.colors.white};
    font-family: 'yg-jalnan';
`

export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
`

export const Title = styled.h1`
    color: ${theme.colors.white};
    font-size: 7em;
    font-family: 'yg-jalnan';
    -webkit-text-stroke: 6px #FF643E;
    letter-spacing: -5px;
    line-height: 0.7;
    text-shadow: 3px 4px 5px gray;
`

export const Title2 = styled.p`
    align-self: flex-end;
    color: #FF643E;
    font-family: 'yg-jalnan';
`

export const InputBox = styled.div`
    display: flex;
    justify-content: center;
`

export const Input = styled.input`
    width: 22vw;
    min-width: 270px;
    padding: 14px 20px;
    border: 1px solid ${theme.colors.gray};
    border-radius: 17px;

    &::placeholder{
        color: ${theme.colors.gray};
    }
`