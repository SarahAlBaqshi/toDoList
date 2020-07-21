import styled, { createGlobalStyle } from "styled-components";

export const ListWrapper = styled.div`
  justify-items: center;
  justify-content: center;
  /* display: flex; */
  flex-wrap: wrap;
`;

export const TaskWrapper = styled.div`
  margin: 20px;
  p {
    text-align: center;
  }
`;

export default ListWrapper;
