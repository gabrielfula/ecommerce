import { useEffect, useState } from "react";
import { Container } from "../../components/categories/styles";
import { Content } from "./styles";
import api from "../../service/api";
import Card from "../../components/card/Card";

export default function Eletronics() {
  const [eletro, setEletro] = useState([]);

  useEffect(() => {
    api
      .get("/search?q=celular")
      .then((res) => {
        setEletro(res.data.results.slice(0, 15));
        console.log(eletro);
      })
      .catch((err) => {
        console.log("Something is wrong", err);
      });
  }, []);

  return (
    <Container>
      <h3>Smartphones</h3>
      <h2>These are our Smartphones</h2>
      <Content>
        {eletro.length === 0 && <span>Carregando...</span>}
        {eletro.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </Content>
    </Container>
  );
}
