import { setItem } from "../../service/LocalStorage";
import {
  ContentCard,
  Desc,
  Icons,
  ImageProducts,
  MapProdutos,
  ButtonAdd,
} from "./styles";
import {
  AiOutlineHeart,
  AiOutlineEye,
  AiFillStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";

export default function Card({ item }) {
  const handleSubmit = () => {
    setItem("Carrinho", item);
  };

  return (
    <ContentCard>
      <section>
        <MapProdutos key={item.id}>
          <ImageProducts>
            <img src={item.thumbnail} alt="imagem produto" />
          </ImageProducts>
          <Icons>
            <AiOutlineHeart />
            <AiOutlineEye />
          </Icons>
        </MapProdutos>
        <Desc>
          <ButtonAdd>
            <button onClick={handleSubmit}>
              <AiOutlineShoppingCart size={25} />
              Add to Cart
            </button>
          </ButtonAdd>

          <p>{item.title}</p>
          <section>
            <span>R${item.price}</span>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <div>
              <AiFillStar />
            </div>
          </section>
        </Desc>
      </section>
    </ContentCard>
  );
}
