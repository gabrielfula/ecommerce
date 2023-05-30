import { useState } from "react";
import { Container } from "../../components/categories/styles";
import { Button, ContentCart, Table, TitleCart } from "./styles";
import TableCart from "../../components/TableCart/TableCart";

export default function Cart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Celular",
      price: "245",
    },
    {
      id: 2,
      name: "Monitor gamer",
      price: "500",
    },
    {
      id: 3,
      name: "Smartphone Samsung A31 SMSU23454",
      price: "5000",
    },
    {
      id: 4,
      name: "Placa de Video Nvidia RTX2060 Super",
      price: "1300",
    },
  ]);

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
          {cart.length === 0 && (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                o Carrinho está vazio
              </td>
            </tr>
          )}
          {cart.map((item) => (
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
