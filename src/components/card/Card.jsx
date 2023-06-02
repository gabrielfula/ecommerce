import { useState } from "react";
import { getItem, setItem } from "../../service/LocalStorage";
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
import { useNavigate } from "react-router-dom";

export default function Card({ item }) {
  const [data, setData] = useState(item);
  const navigate = useNavigate();

  console.log(data);

  const handleSubmit = () => {
    setItem("Carrinho", data);
  };

  const openItem = () => {
    console.log("Open Page", item);
    navigate(`/produto`);
  };

  return (
    <ContentCard>
      <section>
        <MapProdutos key={data.id}>
          <ImageProducts>
            <img src={data.thumbnail} alt="imagem produto" onClick={openItem} />
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

          <p>{data.title}</p>
          <section>
            <span>R${data.price}</span>
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
