import { AiOutlineShoppingCart } from "react-icons/ai";
import { ButtonAdd } from "./styles";

export default function AddCart() {
  return (
    <>
      <ButtonAdd>
        <AiOutlineShoppingCart size={25} />
        Add to Cart
      </ButtonAdd>
    </>
  );
}
