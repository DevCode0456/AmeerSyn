import React from "react";
import AllRoutes from "./Routes/AllRoutes";
import ThemeToggle from "./Shared/Theme";
import MainLayout from "./Pages/Layout/MainLayout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainLayout>
        <ThemeToggle />
        <AllRoutes />
      </MainLayout>
    </Router>
  );
}

export default App;
