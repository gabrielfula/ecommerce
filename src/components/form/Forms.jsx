import { useState } from "react";
import { Form } from "./styles";
import { ButtonSubmit } from "./styles";
import { useDispatch } from "react-redux";
import { login } from "../../hooks/userSlice";

export default function Forms() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: user,
        email: email,
        password: password,
        isLogged: true,
      })
    );

    // console.log(user, email, password);
  };

  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="text"
            placeholder="Your best username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <ButtonSubmit>Log in</ButtonSubmit>
        </div>
      </Form>
    </div>
  );
}
