import { ButtonError, ContentError } from "./styles";
import { Container } from "../../components/categories/styles";

export default function Error() {
  return (
    <>
      <Container>
        <ContentError>
          <div>
            <h1>404 Not Found</h1>
            <p>Your visited page not found. You may go home page.</p>
            <ButtonError href="/">Back to home page</ButtonError>
          </div>
        </ContentError>
      </Container>
    </>
  );
}
