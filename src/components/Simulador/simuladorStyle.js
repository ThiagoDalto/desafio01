import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: #ffffff;
  padding: 0;
  position: relative;
  height: 17.5rem;
  width: 100%;
  h1 {
    font-size: 1rem;
    color: #686868;
    margin-left: 1.25rem;
  }

  label {
    font-size: 0.65rem;
    font-weight: bold;
    color: #a9a9a9;
    margin-bottom: 0;
    margin-left: 1.25rem;
    padding: 0;
  }
  input {
    width: 80%;
    padding: 3px;
    border: 1px solid #add8e9;
    border-radius: 3px;
    margin-bottom: 0.5rem;
    margin-left: 1.25rem;
  }
  input:focus-visible {
    outline: none;
  }
  input:focus {
    border: 1.5px solid #000aaa;
    box-shadow: none;
  }
  .p_error {
    color: red;
  }

  p {
    font-size: 0.5rem;
    padding: 0;
    margin: 0;
    margin-left: 1.25rem;

    color: #a9a9a9;
  }
  button {
    font-size: 0.95rem;
    width: 50%;
    height: 0.5rem;
    background-color: #add8e9;
    padding: 0.75rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 85%;
    right: 25%;
  }
  button:focus-visible {
    outline: none;
  }
  button:focus {
    border: 1.5px solid #000aaa;
  }
  button:hover {
    background-color: #000aaa;
    color: #a9a9a9;
  }

  @media (min-width: 1000px) {
    width: 25rem;
    height: 20rem;
    h1 {
      font-size: 0.8rem;
    }

    button {
      margin-bottom: 0.5rem;
    }
  }
`;
