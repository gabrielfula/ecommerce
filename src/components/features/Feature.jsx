import { Link } from "react-router-dom";
import { Container } from "../categories/styles";
import { ContentFeature, Oculos, Perfume, Playstation, Som } from "./styles";

export default function Feature() {
  return (
    <Container>
      <h3>Featured</h3>
      <h4>New Arrival</h4>
      <ContentFeature>
        <Playstation>
          <h5>PlaySation 5</h5>
          <p>Versão preta e branca está chegando para vendas</p>
          <Link
            style={{
              color: "#fafafa",
              textDecoration: "underline white",
            }}
          >
            Compre agora
          </Link>
        </Playstation>
        <Perfume>
          <h5>Perfume</h5>
        </Perfume>
        <Som>
          <h5>Caixa de Som</h5>
          <p>Versão preta e branca está chegando para vendas</p>
          <Link
            style={{
              color: "#fafafa",
              textDecoration: "underline white",
            }}
          >
            Compre agora
          </Link>
        </Som>
        <Oculos>
          <h5>Óculos</h5>
        </Oculos>
      </ContentFeature>
    </Container>
  );
}
