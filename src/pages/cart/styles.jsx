import { styled } from "styled-components";

export const Table = styled.table`
  border-collapse: separate;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 2rem;
  height: 9rem;

  td {
    width: auto;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
    height: 5rem;
  }

  tr {
    border: 1px solid #000;
    box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
    padding-bottom: 1rem;
  }

  input {
    width: 70px;
    padding: 5px;
    border-radius: 4px;
    outline: none;
    text-align: center;
    border: 1.5px solid rgba(0, 0, 0, 0.4);
  }
`;

export const TitleCart = styled.div`
  padding-bottom: 7rem;
`;

export const ContentCart = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    align-items: center;
  }
`;

export const Button = styled.a`
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
