import React from "react";

import "./FormularioHome.css";

export const FormularioHome = () => {
  return (
    <div className="container FormContainerU">
      <h2
        className="contactU"
        style={{
          letterSpacing: "0.4rem",
        }}
      >
        Contáctanos
      </h2>
      <div id="nombre-apellido" className="row">
        <div className="col-md">
          <label style={{ padding: "0.2rem" }}>Nombre</label>
          <br />
          <input
            className="inputU"
            style={{ width: "100%", height: "2.5rem" }}
            type="text"
          ></input>
        </div>
        <div className="col-md">
          <label style={{ padding: "0.2rem" }}>Apellido</label>
          <br />
          <input
            className="inputU"
            style={{ width: "100%", height: "2.5rem" }}
            type="text"
          ></input>
        </div>
      </div>
      <div id="mail-num" className="row">
        <div className="col-md">
          <label style={{ padding: "0.2rem" }}>E-mail</label>
          <br />
          <input
            className="inputU"
            style={{ width: "100%", height: "2.5rem" }}
            type="mail"
          ></input>
        </div>
        <div className="col">
          <label style={{ padding: "0.2rem" }}>Teléfono </label>
          <br />
          <input
            className="inputU"
            style={{ width: "100%", height: "2.5rem" }}
            type="text"
          ></input>
        </div>
      </div>
      <div>
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
