import React from "react";

import "./FormularioHome.css";

export const FormularioHome = () => {
  return (
    <div className="container FormContainerU">
      <h2 className="contactU">Contáctanos</h2>
      <div id="nombre-apellido" className="row">
        <div className="col">
          <label>Nombre</label>
          <br />
          <input
            style={{ width: "100%", height: "2.5rem" }}
            type="text"
          ></input>
        </div>
        <div className="col">
          <label>Apellido</label>
          <br />
          <input
            style={{ width: "100%", height: "2.5rem" }}
            type="text"
          ></input>
        </div>
      </div>
      <div id="mail-num" className="row">
        <div className="col">
          <label>E-mail</label>
          <br />
          <input
            style={{ width: "100%", height: "2.5rem" }}
            type="mail"
          ></input>
        </div>
        <div className="col">
          <label>Teléfono </label>
          <br />
          <input
            style={{ width: "100%", height: "2.5rem" }}
            type="text"
          ></input>
        </div>
      </div>
      <div className="row">
        <div style={{ paddingTop: "1rem" }}>
          <label>¿Cómo podemos ayudarte? </label>
          <br />
          <textarea className="txtAreaU"></textarea>
        </div>
      </div>
      <div className="contactBtnU">
        <button className="BtnU">Enviar mensaje</button>
      </div>
    </div>
  );
};
