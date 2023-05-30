import AddCart from "../AddCart/AddCart";
import { ContentCard, Desc, Icons, ImageProducts, MapProdutos } from "./styles";
import { AiOutlineHeart, AiOutlineEye, AiFillStar } from "react-icons/ai";

export default function Card({ item }) {
  return (
    <ContentCard>
      <section>
        <MapProdutos key={item.id}>
          <ImageProducts>
            <img src={item.image} alt="imagem produto" />
          </ImageProducts>
          <Icons>
            <AiOutlineHeart />
            <AiOutlineEye />
          </Icons>
        </MapProdutos>
        <Desc>
          <AddCart />
          <p>{item.title}</p>
          <section>
            <span>${item.price}</span>
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
