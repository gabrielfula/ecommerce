import { styled } from "styled-components";

export const InputSearch = styled.input`
  height: 1.6rem;
  border: none;
  width: 200px;
  outline: none;
  font-family: "Poppins";
  font-size: 12px;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 992px) {
    width: 100px;
    display: none;
  }
`;

export const ButtonSearch = styled.button`
  height: 1.9rem;
  cursor: pointer;
  border: none;
  text-align: center;

  @media (max-width: 992px) {
    display: none;
  }
`;
