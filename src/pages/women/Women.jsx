import { useEffect, useState } from "react";
import { Container } from "../../components/categories/styles";
import api from "../../service/api";
import Card from "../../components/card/Card";
import { Content } from "../eletronics/styles";

export default function Women() {
  const [women, setWomen] = useState([]);

  useEffect(() => {
    api.get("/search?q=vestidofeminino").then((res) => {
      setWomen(res.data.results.slice(0, 15));
    });
  }, []);

  return (
    <Container>
      <h3>Women's</h3>
      <h2>These are our Women's clothing</h2>
      <Content>
        {women.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </Content>
    </Container>
  );
}
