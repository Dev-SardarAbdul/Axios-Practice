import NavbarCom from "./components/navbarCom";
import HomeCom from "./components/homeCom";
import { MainApp } from "./appStyle";

function App() {
  return (
    <MainApp>
      <NavbarCom />
      <HomeCom />
    </MainApp>
  );
}

export default App;
