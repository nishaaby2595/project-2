import React, { useState } from "react";
import tech from "./Card"

function Card(props){
    return(
      <div className="card" style={{ border: '2px solid #007bff', padding: '10px', margin: '10px', backgroundColor: '#e0f7fa' }}>
      <img src={props.imgurl} alt={"card image"} style={{ width: '100%',  borderRadius: '5px' }} />
      <h2>{props.title || "Default Title"}</h2>
      <p>{props.description1 || "Default description line 1"}</p>
      <button className="btn-custom">View Plans</button>
    </div>
    );
  }
  
  function createtechcard(p){
    return(
      <div className="cards-container" >
      <Card 
            key={p.techID}
            title={p.name}
            description1={`${p.desc}`}
            imgurl={p.imgurl}
            />
      </div>
    )
  }
  

const Hero = () => {

    return(
        <div className="heroblock">
            <div className="content">
                <h1 style={{ textShadow: '2px 5px 1px rgba(0, 0, 0, 0.3)' }}>Stratergy and growth solutions for your business</h1>
                <h3>Welcome to our business and corporate consultation services </h3>
            </div>
            {tech.map(createtechcard)}
        </div>

    );

}








export default Hero;