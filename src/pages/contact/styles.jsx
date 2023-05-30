import { styled } from "styled-components";

export const ContentContact = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
`;

export const FormEmail = styled.table`
  gap: 1rem;
  width: auto;
  height: auto;
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 0 1rem;

  input {
    width: 235px;
    height: 50px;
    background: ${({ theme }) => theme.colors.grey};
    outline: none;
    border: none;
    padding-left: 1rem;
    border-radius: 5px;
    font-family: "Archivo";
  }

  textarea {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.grey};
    outline: none;
    border: none;
    padding: 1rem;
    border-radius: 10px;
    font-family: "Archivo";
  }

  div {
    padding-top: 2rem;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

export const ContactUs = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  p {
    width: 100%;
  }

  div {
    display: flex;
    text-align: start;
    gap: 10px;
    align-items: center;

    .icon {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      width: 40px;
      height: 40px;
      border-radius: 31px;
      padding: 7px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
