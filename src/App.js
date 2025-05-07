import React, { Suspense } from "react";
import AllRoutes from "./Routes/AllRoutes";
import LoadingScreen from "./Helper/LoadingScreen";
import MainLayout from "./Pages/Layout/MainLayout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Router>
        <MainLayout>
          <AllRoutes />
        </MainLayout>
      </Router>
    </Suspense>
  );
}

export default App;
