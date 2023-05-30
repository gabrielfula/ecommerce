import { useEffect, useState } from "react";
import { Container } from "../../components/categories/styles";

import api from "../../service/api";
import Card from "../../components/card/Card";
import { Content } from "../eletronics/styles";

export default function Joias() {
  const [joias, setJoias] = useState([]);

  useEffect(() => {
    api.get("/products/category/jewelery").then((res) => {
      setJoias(res.data);
    });
  }, []);

  return (
    <Container>
      <h3>Jewelery</h3>
      <h2>These are our Jewelry</h2>
      <Content>
        {joias.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </Content>
    </Container>
  );
}
