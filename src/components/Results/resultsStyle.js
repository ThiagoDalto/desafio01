import styled from "styled-components";

export const Result = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding: 0;
  color: blue;
  background-color: #f7f9fa;

  h2 {
    color: #5c8bc6;
    font-style: italic;
    font-weight: 500;
    font-size: 1rem;
    border-bottom: 1px solid #87b5f0;
    border-radius: 0.05rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 0.75rem;
    font-size: 1rem;
    font-style: italic;
    overflow-y: auto;
  }

  ul::-webkit-scrollbar {
    width: 20px;
  }

  ul::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ul::-webkit-scrollbar-thumb {
    background: #87b5f0;
    border-radius: 10px;
  }

  ul::-webkit-scrollbar-thumb:hover {
    background: #5c8bc6;
  }

  ul li {
    margin: 0;
    padding: 0;
    color: #87b5f0;
    list-style: none;
    font-size: 0.75rem;
  }

  @media (min-width: 1000px) {
    height: 20rem;
  }
`;
