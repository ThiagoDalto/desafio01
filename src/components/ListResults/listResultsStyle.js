import styled from "styled-components";


export const Results = styled.div`
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: 0;
    color: blue;
    background-color: #F7F9FA;

   
    ul{
        display: flex;
        flex-direction: column;
        padding: 0;
        gap: 0.75rem;
        font-size: 1rem;
        font-style: italic;
    }
    li{
        margin: 0;
        padding: 0;
        color: #87B5F0;
        list-style: none;
    }

    @media (min-width: 1000px){
        height: 17.5rem;
    }

`