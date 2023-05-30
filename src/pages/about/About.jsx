import { Container } from "../../components/categories/styles";
import { ContentAbout, GridIcon, PeopleGrid } from "./styles";
import { BiStore } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";

export default function About() {
  return (
    <Container>
      <div>Home/About</div>
      <ContentAbout>
        <div>
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div>
          <img
            src="/imagens/portrait-two-people-bag.avif"
            alt="portrait-two-people-bag"
          />
        </div>
      </ContentAbout>
      <GridIcon>
        <div>
          <BiStore size={50} />
          <span>10.5k</span>
          <p>Sallers active our site</p>
        </div>
        <div>
          <RiMoneyDollarCircleLine size={50} />
          <span>10.5k</span>
          <p>Sallers active our site</p>
        </div>
        <div>
          <RiMoneyDollarCircleLine size={50} />
          <span>45.5k</span>
          <p>Customer active in our site</p>
        </div>
        <div>
          <TbMoneybag size={50} />
          <span>25k</span>
          <p>Anual gross sale in our site</p>
        </div>
      </GridIcon>
      <PeopleGrid>
        <div>
          <img
            src="/imagens/man-person-suit-tie-church-professional-pxhere.com.jpg"
            alt="CEO"
          />
          <h4>Neymar Jr</h4>
          <p>Founder</p>
        </div>
        <div>
          <img
            src="/imagens/man-person-suit-tie-church-professional-pxhere.com.jpg"
            alt="Designer"
          />
          <h4>Cauã Reymond</h4>
          <p>Product Designer</p>
        </div>
        <div>
          <img
            src="/public/imagens/man-person-suit-tie-church-professional-pxhere.com.jpg"
            alt=""
          />
          <h4>Brad Pitt</h4>
          <p>Estágiario</p>
        </div>
      </PeopleGrid>
    </Container>
  );
}
