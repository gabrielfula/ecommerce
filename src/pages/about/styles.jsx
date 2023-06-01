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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-self: center;
  align-self: center;
  width: auto;
  padding-top: 10rem;
  gap: 10rem;

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 30px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      gap: 1rem;
    }
  }
`;

export const CardPeople = styled.div`
  display: flex;
  width: auto;
  height: auto;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};

  img {
    width: 60%;
    padding: 1rem;
    height: 100%;

    @media (max-width: 992px) {
      /* height: 100%; */
    }
  }
`;
