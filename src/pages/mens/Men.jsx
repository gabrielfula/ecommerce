import { useEffect, useState } from "react";
import { Container } from "../../components/categories/styles";
import api from "../../service/api";
import Card from "../../components/card/Card";
import { Content } from "../eletronics/styles";

export default function Men() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    api.get("/products/category/men's clothing").then((res) => {
      setClothes(res.data);
    });
  }, []);
  return (
    <Container>
      <h3>Men's</h3>
      <h2>These are our Men's clothing</h2>
      <Content>
        {clothes.map((item) => {
          <Card item={item} key={item.id} />;
        })}
      </Content>
    </Container>
  );
}
