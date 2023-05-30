import { styled } from "styled-components";

export const ButtonAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  height: 45px;
  width: 100%;
  border-radius: 0px 0px 4px 4px;
  font-size: 13px;
  gap: 10px;
  cursor: pointer;
`;
