import React from "react";
import "./styles.css";
// import NewForm from "./NewUserRegistration/NewForm";
import NewForm from "./TechnicianInstallation/NewForm";
// import HookForm from "./HookForm";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NewForm />
      </ThemeProvider>
      {/* <HookForm /> */}
    </div>
  );
}
