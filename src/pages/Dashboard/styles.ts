import styled, {css} from "styled-components";
import { shade } from "polished";

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const Form = styled.form<FormProps>`
  max-width: 700px;
  margin-top: 40px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;

    background: #ffffff;
    border-radius: 5px 0 0 5px;
    border: 2px solid transparent;

    color: #3d3d4d;

    ${(props) => 
      props.hasError && css`
      border-color: #c53030;
      `
    }

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    display: flex;
    align-items: center;
    color: white;
    font-weight: bold;

    padding: 19px 64px;
    width: 210px;
    height: 70px;

    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: none;

    transition: background-color 0.4s;

    &:hover {
      background-color: ${shade(0.2, "#04d361")};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
