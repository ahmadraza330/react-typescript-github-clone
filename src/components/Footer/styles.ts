import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 25px 32px;
`;

export const Line = styled.div`
  max-width: 1280px;
  width: 100%;
  border-top: 1px solid #e1e4e8;
`;

export const GithubLogo = styled(FaGithub)`
  margin-top: 25px;
  fill: #e1e4e8;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
