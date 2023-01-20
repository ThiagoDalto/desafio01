import styled from "styled-components";

export const Consult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f7fa;
  width: 100%;

  @media (min-width: 1000px) {
    flex-direction: row;
    width: max-content;
  }
`;
