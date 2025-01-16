import { BrowserRouter, Routes } from "react-router";
import "./App.css";
import { Route } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Loading from "./pages/Loading";
import Configurable from "./pages/Configurable";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="loading" element={<Loading />} />
          <Route path="configurable" element={<Configurable />} />
          <Route path="error" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
