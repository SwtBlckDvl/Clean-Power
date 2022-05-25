// import { Navegation } from "./components/Navegation";
// import { Home } from "./components/sections/Home";
import { NavbarPage } from "./components/Navbar/NavbarPage";
import { Home2 } from "./components/sections/Home2";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Portafolio } from "./components/sections/Portafolio";
import { Faq } from "./components/sections/Faq";
import { Footer } from "./components/Footer";

import "./styles/GlobalStyle.css";

function App() {
  return (
    <>
      <div id="Theme">
        <NavbarPage />
        <Home2 />
        <About />
        <Services />
        <Portafolio />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
