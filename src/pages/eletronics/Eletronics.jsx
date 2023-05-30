import { useEffect, useState } from "react";
import { Container } from "../../components/categories/styles";
import { Content } from "./styles";
import api from "../../service/api";
import Card from "../../components/card/Card";

export default function Eletronics() {
  const [eletro, setEletro] = useState([]);

  useEffect(() => {
    api
      .get("/products/category/electronics")
      .then((res) => {
        setEletro(res.data);
        console.log(eletro);
      })
      .catch((err) => {
        console.log("Something is wrong", err);
      });
  }, []);

  return (
    <Container>
      <h3>Eletronics</h3>
      <h2>These are our Eletronics</h2>
      <Content>
        {eletro.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </Content>
    </Container>
  );
}
