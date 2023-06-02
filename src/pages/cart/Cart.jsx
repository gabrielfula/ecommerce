import { Container } from "../../components/categories/styles";
import { Button, ContentCart, Table, TitleCart } from "./styles";
import TableCart from "../../components/TableCart/TableCart";
import { useState } from "react";
import { getItem } from "../../service/LocalStorage";

export default function Cart() {
  const [data, setData] = useState([getItem("Carrinho") || []]);

  console.log(data);

  return (
    <Container>
      <TitleCart>
        <h4>Home/Cart</h4>
      </TitleCart>

      <Table>
        <thead>
          <tr>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                o Carrinho está vazio
              </td>
            </tr>
          )}
          {data.map((item) => (
            <TableCart item={item} key={item.id} />
          ))}
        </tbody>
      </Table>
      <ContentCart>
        <Button href="/">Return to Shop</Button>
        <Button href="">Update Cart</Button>
      </ContentCart>
    </Container>
  );
}
