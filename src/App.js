// import { Navegation } from "./components/Navegation";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Faq } from "./components/sections/Faq";
import { Footer } from "./components/Footer";
import { NavbarPage } from "./components/Navbar/NavbarPage";

import "./styles/GlobalStyle.css";

function App() {
  return (
    <>
      <div id="Theme">
        <NavbarPage />
        <Home />
        <About />
        <Services />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
