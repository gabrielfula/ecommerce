import { styled } from "styled-components";

export const Container = styled.section`
  padding: 135px;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    position: relative;

    &::after {
      content: "";
      height: 1.5rem;
      width: 10px;
      background: ${({ theme }) => theme.colors.primary};
      position: absolute;
      left: -15px;
      border-radius: 25%;
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 992px) {
    padding: 2rem;
    font-size: 12px;
  }

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 48px;
  }
`;

export const ContentCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding-top: 2rem;
  justify-items: center;
  grid-gap: 1rem;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    height: 9rem;
    border: 1px solid ${({ theme }) => theme.colors.black};
    width: 200px;
    padding: 2rem;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      transition: all 0.7s;
      a {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
  }
`;
