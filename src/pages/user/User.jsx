import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/categories/styles";
import { ContentUser, LabelData } from "./styles";
import { logout, userSelect } from "../../hooks/userSlice";
import { ButtonSubmit } from "../../components/form/styles";

export default function User() {
  const user = useSelector(userSelect);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <h5>My Account</h5>
      <ContentUser>
        <h2>
          Welcome, <span>{user.name}</span>
        </h2>
        <div>
          <p>Email</p>
          <LabelData>{user.email}</LabelData>
        </div>
        <div>
          <p>Your Password</p>
          <LabelData>{user.password}</LabelData>
        </div>
        <ButtonSubmit onClick={handleLogout}>Logout</ButtonSubmit>
      </ContentUser>
    </Container>
  );
}
