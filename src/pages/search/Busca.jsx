import { useSearchParams } from "react-router-dom";
import { Container } from "../../components/categories/styles";
import { Content } from "../eletronics/styles";
import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import api from "../../service/api";

export default function Busca() {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState([]);

  const query = searchParams.get("q");

  useEffect(() => {
    api.get(`/search?q=${query}`).then((res) => {
      setSearch(res.data.results.slice(0, 15));
      console.log(search);
    });
  }, [searchParams]);

  return (
    <Container>
      <h3>{query}</h3>
      <h2>These are our {query}</h2>
      <Content>
        {search.length === 0 && <span>Carregando...</span>}
        {search.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </Content>
    </Container>
  );
}
