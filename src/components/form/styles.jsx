import { styled } from "styled-components";

export const Form = styled.form`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  input {
    background: none;
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
    padding: 5px;
    width: 18rem;
    font-family: "Poppins";
  }
`;

export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 48px;
  width: 14rem;
  height: 3.5rem;
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
