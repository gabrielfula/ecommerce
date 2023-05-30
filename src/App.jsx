import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "./styles/Globals";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
