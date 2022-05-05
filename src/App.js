// import { Navegation } from "./components/Navegation";
import { About } from "./components/sections/About";
import { Home } from "./components/sections/Home";
import { Team } from "./components/sections/Team";
import { Faq } from "./components/sections/Faq";
import { Footer } from "./components/Footer";
import { NavbarPage } from "./components/Navbar/NavbarPage";

import "./App.css";
import "./styles/GlobalStyle.css";

function App() {
  return (
    <>
      <div id="Theme">
        <NavbarPage />
        {/* <Navegation /> */}
        <Home />
        <About />
        <Team />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
