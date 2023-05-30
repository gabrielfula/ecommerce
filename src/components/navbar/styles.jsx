import styled, { css } from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  padding: 0 4rem;
  justify-content: space-between;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.white};

  a {
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      font-weight: 700;
      transition: all 0.3s;
    }
  }

  @media (max-width: 992px) {
    padding: 0 0 0 10px;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 5rem;
  z-index: 2;

  @media (max-width: 992px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    position: absolute;
    top: 6rem;
    left: 0;
    align-items: center;
    flex-direction: column;
    padding: 0;
    justify-content: center;
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    width: 100%;
    gap: 3rem;
  }

  div {
    display: flex;
    gap: 5rem;

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  input {
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
  }

  button {
    height: 1.9rem;
    cursor: pointer;
    border: none;
    text-align: center;

    @media (max-width: 992px) {
      display: none;
    }
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const Hamburguer = styled.button`
  display: none;
  background: none;
  border: none;
  flex-direction: column;
  padding-right: 2rem;

  @media (max-width: 992px) {
    display: flex;
    gap: 5px;
  }

  .line1,
  .line3 {
    width: 20px;
    height: 1px;
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.black};
  }

  .line2 {
    width: 15px;
    height: 1px;
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.black};
  }

  /* ${({ show }) =>
    show &&
    css`
      .line1 {
        position: absolute;
        top: 7px;
        right: 2px;
        transform: ${({ show }) => (show ? "rotate(47deg)" : "rotate(0)")};
        transition: 1s;
      }

      .line2 {
        visibility: ${({ show }) => (show ? "hidden" : "visible")};
        top: 7px;
        right: 2px;
      }

      .line3 {
        position: absolute;
        transform: ${({ show }) => (show ? "rotate(-47deg)" : "rotate(0)")};
        transition: .5s; 
        top: 7px;
        right: 2px;
    `}
      } */
`;
