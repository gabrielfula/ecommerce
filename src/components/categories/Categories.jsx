import { BsPhone } from "react-icons/bs";
import { GiBigDiamondRing, GiClothes } from "react-icons/gi";
import { GrRestroomWomen } from "react-icons/gr";
import { Container, ContentCategories } from "./styles";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <Container>
      <h3>Categories</h3>
      <h2>Browse by Category</h2>
      <ContentCategories>
        <div>
          <Link to="/eletronic">
            <BsPhone size={40} />
            Smartphone
          </Link>
        </div>
        <div>
          <Link to="/joias">
            <GiBigDiamondRing size={40} />
            Joias
          </Link>
        </div>
        <div>
          <Link to="/men">
            <GiClothes size={40} />
            Men's Clothing
          </Link>
        </div>
        <div>
          <Link to="/women">
            <GrRestroomWomen size={40} />
            Women's Clothing
          </Link>
        </div>
      </ContentCategories>
    </Container>
  );
}
