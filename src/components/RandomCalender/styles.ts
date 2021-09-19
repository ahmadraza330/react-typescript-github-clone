import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
  padding: 16px 20px 0 10px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;

  .wrapper {
    .scale-0 {
      fill: #ebedf0;
    }
    .scale-1 {
      fill: #9be9a8;
    }
    .scale-2 {
      fill: #3fc463;
    }
    .scale-3 {
      fill: #30a14e;
    }
    .scale-4 {
      fill: #216e3a;
    }

    width: 893px;
  }

  span {
    font-size: 11px;
    color: #0366d6;
    margin-top: -25px;
    margin-left: 7px;
    padding-bottom: 16px;

    align-self: flex-start;
  }
`;
