import React from "react";
import MainLayout from "./Pages/Layout/MainLayout";
import AllRoutes from "./Routes/AllRoutes";
import ThemeToggle from "./Shared/Theme";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainLayout>
        <AllRoutes />
        <ThemeToggle />

      </MainLayout>
    </Router>
  );
}

export default App;
