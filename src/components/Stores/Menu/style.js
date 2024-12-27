import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
`

export const Menus = styled.div`
    width: 100%;
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;

    &::-webkit-scrollbar{
        display: none;
    }
`

export const StoreName = styled.p`
    font-family: 'yg-jalnan';
    font-size: 1em;
    margin: 5px;
`

export const Border = styled.hr`
    background-color: lightgray;
    height: 1px;
    border: 0;
    margin-top: 70px;
`