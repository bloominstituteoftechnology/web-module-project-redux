import React from 'react';
import { connect } from 'react-redux'; //connecting react with redux


const Header = props => {

  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    image: state.car.image,
    name: state.car.name,
    price: state.car.price
  }
}
//this replaces prop drilling, specifying exactly what we are passing through
export default connect(mapStateToProps)(Header); //inside the empty we put our mapstatetoprops
