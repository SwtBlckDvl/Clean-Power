import React from "react";
import { FormularioHome } from "../FormularioHome";

import "./Home.css";

export const Home = () => {
  return (
    <div className="contenedor" id="row-home">
      <div className="container">
        <div className="row">
          <div className="col headerInfo">
            <h1 className="welcome">Bienvenido a Clean Power</h1>
            <br />
            <h3 className="littleDesc">
              En Clean Power creamos soluciones innovadoras
            </h3>
            <br />
          </div>
          <div className="col formularioU">
            <FormularioHome />
          </div>
        </div>
      </div>
    </div>
  );
};
