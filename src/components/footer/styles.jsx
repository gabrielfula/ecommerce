import { styled } from "styled-components";

export const ContentFooter = styled.div`
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 2rem;
  height: 20rem;
  width: 100%;
  padding: 8.4rem;

  color: ${({ theme }) => theme.colors.white};
  border: 1px solid;

  @media (max-width: 992px) {
    padding: 1rem;
    font-size: 12px;
  }

  div {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray};
  }

  td {
    cursor: pointer;
  }
`;

export const Table = styled.table`
  td {
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    width: 100%;

    td {
      font-size: 11px;
    }

    tr {
      line-height: 200%;
    }
  }
`;

export const IconFooter = styled.div`
  padding: 7rem 10rem;
  display: flex;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    width: 100%;

    @media (max-width: 992px) {
      width: 90px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  span {
    font-weight: 700;

    @media (max-width: 992px) {
      width: 100%;
      font-size: 10px;
    }
  }

  @media (max-width: 992px) {
    gap: 2rem;
    font-size: 12px;
  }
`;
