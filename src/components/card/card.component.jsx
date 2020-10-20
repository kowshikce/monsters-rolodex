import React from 'react';
import "./card.styles.css";

export const Card = (props) => {
  return (<div className="card-container">
    <img alt="moster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
    <h2>{props.monster.name}</h2>
    <h6>Email {props.monster.email}</h6>

  </div>);
}
