import { styled } from "styled-components";

export const ContentError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
  }
`;

export const ButtonError = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 48px;
  width: 17rem;
  height: 3.5rem;
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
