import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    background-color: #FFFFFF;
    padding: 0;
    position: relative;
    height: 17.5rem;
    width: 100%;
    h1{
        font-size: 1rem;
        color: #686868;
        margin-left: 1.25rem;
    }

    label{
        font-size: .65rem;
        font-weight: bold;
        color: #A9A9A9;
        margin-bottom: 0;
        margin-left: 1.25rem;
        padding: 0;
        

    }
    input{
        width: 80%;
        padding: 3px;
        border: 1px solid #ADD8E9;
        border-radius: 3px;
        margin-bottom: .5rem;
        margin-left: 1.25rem;
        

    }
    input:focus-visible{
        outline: none;
    }
    input:focus{
        border: 1.5px solid #000aaa;
        box-shadow: none;
    }
    .p_error{
        color: red;
        
    }

    p{
        font-size: 0.5rem;
        padding: 0;
        margin: 0;
        margin-left: 1.25rem;
        
        
        color: #A9A9A9;
    }
    button{
        font-size: .95rem;
        width: 50%;
        height: 0.5rem;
        background-color: #ADD8E9;
        padding: .75rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 85%;
        right: 25%;
        
    }
    button:focus-visible{
        outline: none;
    }
    button:focus{
        border: 1.5px solid #000aaa;
    }
    button:hover{
        background-color: #000aaa;
        color: #A9A9A9;
    }

    @media (min-width: 1000px){
        width: 25rem;
        height: 20rem;
        h1{
            font-size: .80rem;
        }
    
        button{
            margin-bottom: .5rem;
        }
}
`