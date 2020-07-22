import styled, { createGlobalStyle } from "styled-components";

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const DeleteButtonStyled = styled.p`
  color: red;
`;
export const GlobalStyle = createGlobalStyle`
 body{
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}
}
`;
export const ListWrapper = styled.div`
  justify-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TaskWrapper = styled.div`
  margin: 20px;

  p {
    text-align: left;
    display: inline-flex;

    padding: 10px 20px;
  }
`;

export default ListWrapper;
