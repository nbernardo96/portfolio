import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "images/logos/react.svg",
  },
  {
    id: 2,
    image: "images/logos/python.svg",
  },
  {
    id: 3,
    image: "images/logos/javascript.svg",
  },
  {
    id: 4,
    image: "images/logos/django.svg",
  },
  {
    id: 5,
    image: "images/logos/postgresql.svg",
  },
  {
    id: 6,
    image: "images/logos/mysql.svg",
  },
  {
    id: 7,
    image: "images/logos/html5.svg",
  },
  {
    id: 8,
    image: "images/logos/css3.svg",
  },
];

function Brandlogos() {
  return (
    <div id="branglogos">
      <div className="container">
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <img src={brandlogo.image} alt="client-name" style={{ height: '25%', width: '25%' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
