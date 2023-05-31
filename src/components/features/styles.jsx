import { styled } from "styled-components";

export const ContentFeature = styled.section`
  display: flex;
  gap: 4rem;
`;

export const Playstation = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 0 20px 20px;
  align-items: start;
  gap: 0.5rem;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  width: 570px;
  height: 600px;
  background-image: url("/imagens/ps5-removebg-preview.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  h5 {
    font-size: 2rem;
    font-family: "Inter";
    letter-spacing: 0.15em;
    font-weight: 500;
    font-style: normal;
  }
`;

export const Perfume = styled.div`
  width: 270px;
  height: 284px;
`;

export const Oculos = styled.div`
  width: 432px;
  height: 286px;
`;

export const Som = styled.div`
  width: 570px;
  height: 284px;
  background-image: url("/imagens/amazon.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.colors.white};

  h5 {
    font-size: 2rem;
    font-family: "Inter";
    font-weight: 500;
    font-style: normal;
  }
`;
