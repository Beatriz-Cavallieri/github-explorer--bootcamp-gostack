import styled from "styled-components";
import { shade } from "polished";

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const Form = styled.form`
  max-width: 700px;
  margin-top: 40px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;

    background: #ffffff;
    border-radius: 5px 0 0 5px;
    border: none;

    color: #3d3d4d;

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
