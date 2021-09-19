import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #1b1f23;
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: #fff;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;
  input {
    background: rgba(255, 255, 255, 0.13);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
    &:focus {
      width: 318px;
    }

    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`;
