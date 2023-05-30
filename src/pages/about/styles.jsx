import { styled } from "styled-components";

export const ContentAbout = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 4rem;

    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const GridIcon = styled.div`
  padding-top: 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    width: auto;
    height: auto;
    border: 1px solid ${({ theme }) => theme.colors.gray};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      transition: all 0.5s;
    }
  }

  span {
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    font-size: 14ppx;
  }
`;

export const PeopleGrid = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 10rem;
  gap: 5rem;

  img {
    width: 30%;
  }

  div {
    display: flex;
    width: auto;
    align-items: center;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.background};
  }
`;
