import { styled } from "styled-components";

export const ContentHeader = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  font-size: 14px;

  @media (max-width: 992px) {
    p {
      font-size: 9px;
    }
  }
`;
