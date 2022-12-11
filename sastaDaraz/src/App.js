import HomeCom from "./components/homeCom";
import NavbarCom from "./components/navbar";
import { MainApp } from "./appStyles";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ShopCom from "./components/shopCom";

function App() {
  return (
    <BrowserRouter>
      <MainApp>
        <NavbarCom />
        <Routes>
          <Route path="/" element={<HomeCom />} />
          <Route path="/shop" element={<ShopCom />} />
        </Routes>
      </MainApp>
    </BrowserRouter>
  );
}

export default App;
