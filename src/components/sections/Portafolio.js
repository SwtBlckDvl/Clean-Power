import React from "react";

export const Portafolio = () => {
  return (
    <section id="portafolio" className="portafolio section-padding pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-4">
              <h2>Nuestros Proyectos</h2>
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
            <div className="card text-center bg-white pb-2">
              <div className="card-body text-dark">
                <div className="mb-4">
                  <img
                    src=""
                    alt=""
                    style={{ height: "320px" }}
                    className="img-fluid"
                  />
                  <h3 className="card-title">Proyecto A</h3>
                  <p className="lead">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <button className="btn btn-warning">Más</button>
                </div>
              </div>
            </div>
          </div>
          <div className="tarjeta col-12 col-md-12 col-lg-4">
            <div className="card text-center bg-white pb-2">
              <div className="card-body text-dark">
                <div className="mb-4">
                  <img
                    src=""
                    alt=""
                    style={{ height: "320px" }}
                    className="img-fluid"
                  />
                  <h3 className="card-title">Proyecto B</h3>
                  <p className="lead">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <button className="btn btn-warning">Más</button>
                </div>
              </div>
            </div>
          </div>
          <div className="tarjeta col-12 col-md-12 col-lg-4">
            <div className="card text-center bg-white pb-2">
              <div className="card-body text-dark">
                <div className="mb-4">
                  <img
                    src=""
                    alt=""
                    style={{ height: "320px" }}
                    className="img-fluid"
                  />
                  <h3 className="card-title">Proyecto C</h3>
                  <p className="lead">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <button className="btn btn-warning">Más</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
