import { Line } from "./styles";

export default function TableCart({ item }) {
  return (
    <>
      <tr>
        <Line>
          <img src={item.thumbnail} alt="Item Carrinho" />
        </Line>
        <Line>{item.title}</Line>
        <Line>${item.price}</Line>
        <Line>
          <input type="number" />
        </Line>
        <Line>${item.price}</Line>
      </tr>
    </>
  );
}
