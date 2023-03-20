import React from "react";
import DishForm from "./components/DishForm";
import { ThemeConfig } from "./theme/ThemeConfig";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <GlobalStyle />
      <div className="App">
        <DishForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
