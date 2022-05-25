import React from "react";

import "./Services.css";

export const Services = () => {
  return (
    <section id="services" className="services section-padding pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-3">
              <h2 className="pb-3">Nuestros Servicios</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="tarjeta col-12 col-md-12 col-lg-4">
            <div className=" card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-layers-half"></i>
                <h3 className="card-title">La Mejor Calidad</h3>
                <p className="lead">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
                <button className="btn btn-warning text-dark">Leer más</button>
              </div>
            </div>
          </div>
          <div className="tarjeta col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-power"></i>
                <h3 className="card-title">Accesorios Eléctricos</h3>
                <p className="lead">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
                <button className="btn btn-warning text-dark">Leer más</button>
              </div>
            </div>
          </div>
          <div className="tarjeta col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-lightning"></i>
                <h3 className="card-title">Reguladores</h3>
                <p className="lead">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
                <button className="btn btn-warning text-dark">Leer más</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
