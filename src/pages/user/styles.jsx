import { styled } from "styled-components";

export const ContentUser = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const LabelData = styled.div`
  outline: none;
  background: ${({ theme }) => theme.colors.grey};
  padding: 1rem;
  width: 350px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.gray};
`;
