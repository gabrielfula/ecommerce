import { Container } from "../../components/categories/styles";
import { Button } from "../cart/styles";
import { ContactUs, ContentContact, FormEmail } from "./styles";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <Container>
      <ContentContact>
        <ContactUs>
          <section>
            <div>
              <BsFillTelephoneFill className="icon" />
              <p>Call to Us</p>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </section>
          <section>
            <div>
              <HiOutlineMail className="icon" />
              <p>Write To US</p>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </section>
        </ContactUs>

        <FormEmail>
          <tr>
            <td>
              <input type="text" placeholder="Your Name *" />
            </td>
            <td>
              <input type="text" placeholder="Your Email *" />
            </td>
            <td>
              <input type="text" placeholder="Your Phone *" />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <textarea type="text" placeholder="Your Massage" />
            </td>
          </tr>
          <div>
            <Button>Send Massage</Button>
          </div>
        </FormEmail>
      </ContentContact>
    </Container>
  );
}
