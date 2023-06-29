import { ContentFooter, IconFooter, Table } from "./styles";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { ImHeadphones } from "react-icons/im";
import { MdOutlineSecurity } from "react-icons/md";

export default function Footer() {
  return (
    <div>
      {/* <IconFooter>
        <div>
          <TbTruckDelivery size={50} />
          <span>FREE AND FAST DELIVERY</span>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div>
          <ImHeadphones size={50} />
          <span>24/7 CUSTOMER SERVICE</span>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div>
          <MdOutlineSecurity size={50} />
          <span>MONEY BACK GUARANTEE</span>
          <p>We reurn money within 30 days</p>
        </div>
      </IconFooter> */}
      <ContentFooter>
        <Table>
          <thead>
            <tr>
              <td>Exclusive</td>
              <td>Support</td>
              <td>Account</td>
              <td>Social</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Subscribe</td>
              <td>+88015-88888-9999</td>
              <td>My Account</td>
              <td>
                <AiOutlineInstagram />
              </td>
              <td>
                <GrFacebookOption />
              </td>
            </tr>
          </tbody>

          <tbody>
            <td>Get 10% off</td>
            <td>exclusive@gmail.com</td>
            <td>Login / Register</td>
          </tbody>
        </Table>
        <div>Copyright Rimel 2022. All right reserved</div>
      </ContentFooter>
    </div>
  );
}
