import { useEffect, useState } from "react";
import Card from "../card/Card";
import { Container } from "../categories/styles";
import { ContentExplore } from "./styles";
import api from "../../service/api";

export default function Explore() {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    api.get("/products?limit=5").then((result) => {
      setProduto(result.data);
      console.log(produto);
    });
  }, []);

  return (
    <Container>
      <h3>Our Products</h3>
      <h2>Explore Our Products</h2>
      <ContentExplore>
        {produto.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </ContentExplore>
    </Container>
  );
}
