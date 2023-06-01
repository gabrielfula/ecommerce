import { Container } from "../../components/categories/styles";
import { CardPeople, ContentAbout, GridIcon, PeopleGrid } from "./styles";
import { BiStore } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";
import { TfiLinkedin } from "react-icons/tfi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

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
        <section>
          <CardPeople>
            <img
              src="/imagens/man-person-suit-tie-church-professional-pxhere.com.png"
              alt="CEO"
            />
          </CardPeople>
          <h4>Emma Watson</h4>
          <p>Founder</p>
          <div>
            <AiOutlineTwitter size={20} />
            <AiOutlineInstagram size={20} />
            <TfiLinkedin size={20} />
          </div>
        </section>

        <section>
          <CardPeople>
            <img
              src="/imagens/man-person-suit-tie-church-professional-pxhere.com.png"
              alt="Designer"
            />
          </CardPeople>
          <h4>Cauã Reymond</h4>
          <p>Product Designer</p>
          <div>
            <AiOutlineTwitter size={20} />
            <AiOutlineInstagram size={20} />
            <TfiLinkedin size={20} />
          </div>
        </section>

        <section>
          <CardPeople>
            <img
              src="/imagens/man-person-suit-tie-church-professional-pxhere.com.png"
              alt=""
            />
          </CardPeople>
          <h4>Brad Pitt</h4>
          <p>Estágiario</p>
          <div>
            <AiOutlineTwitter size={20} />
            <AiOutlineInstagram size={20} />
            <TfiLinkedin size={20} />
          </div>
        </section>
      </PeopleGrid>
    </Container>
  );
}
