import React from "react";

// import Elec4 from "../../assets/Elec4.jpg";

export const About = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="about-img" style={{ padding: "3rem 0 4rem 0" }}>
              <img src="" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
            <div className="about-text">
              <h2>
                Entregamos la mejor calidad <br />
                de servicios
              </h2>
              <p style={{ paddingTop: "1.5rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
