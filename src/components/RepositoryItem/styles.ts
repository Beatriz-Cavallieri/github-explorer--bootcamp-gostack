import { Link } from "react-router-dom";
import styled from "styled-components";

export const Repo = styled(Link)`
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s;

  & + a {
      margin-top: 16px;
  }

  &:hover {
    transform: translateX(10px);
  }

  img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }

  div {
    margin-left: 16px;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #a8a8b3;
  }
`;
