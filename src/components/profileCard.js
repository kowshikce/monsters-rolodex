import React from 'react';

const ProfileCart = (props) => {

  return (<div key={props.key}>

    <h1>Name : {props.person.name}</h1>
    <p>username: {props.person.username}</p>
    <p>email: {props.person.email}</p>
    <p>Address</p>
    <ul>
      <li>street: {props.person.address.street}</li>
      <li>suite: {props.person.address.suite}</li>
      <li>city: {props.person.address.city}</li>
      <li>zipcode: {props.person.address.zipcode}</li>
    </ul>
    <p>Geo</p>
    <ul>
      <li>latitude: {props.person.address.geo.lat}</li>
      <li>longtitude: {props.person.address.geo.lng}</li>
    </ul>
  </div>);
}

export default ProfileCart;
