import { styled } from "styled-components";

export const ContentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 100%;

  @media (max-width: 992px) {
    flex-direction: column;
  }

  img {
    height: 100%;
    width: 100%;
  }

  p {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    font-size: 13px;
    text-align: center;
    max-width: 25ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

export const MapProdutos = styled.div`
  width: auto;
  height: auto;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
  display: flex;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 7px;
  max-width: 270px;
  max-height: 200px;

  @media (max-width: 992px) {
    padding-top: 1rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  height: 2rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background};
`;

export const ImageProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 1rem;
  gap: 16px;

  section {
    display: flex;
    gap: 10px;
    color: orange;

    div {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;
