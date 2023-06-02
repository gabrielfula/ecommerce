import { Container } from "../../components/categories/styles";

export default function Produto({ item }) {
  console.log(item);
  return (
    <Container>
      <div>Produto</div>
      {/* <div>{item.title}</div> */}
    </Container>
  );
}
