import React from "react";
import { Col } from "react-bootstrap";
import mov1 from '../images/mov1.jpg'



const CardMovie = () => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
     
        <div className="card">
          <img src={mov1} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>name : "rain man"</p>
              <p>date:"12-05-1980"</p>
              <p>reviews account :"12"</p>
              <p>review:"60%"</p>
            </div>
          </div>
        </div>
      
    </Col>
  );
};

export default CardMovie;