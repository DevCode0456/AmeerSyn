import React, { Suspense } from "react";
import ThemeToggle from "./Shared/Theme";
import AllRoutes from "./Routes/AllRoutes";
import LoadingScreen from "./Helper/LoadingScreen";
import MainLayout from "./Pages/Layout/MainLayout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Router>
        <MainLayout>
          <ThemeToggle />
          <AllRoutes />
        </MainLayout>
      </Router>
    </Suspense>
  );
}

export default App;
