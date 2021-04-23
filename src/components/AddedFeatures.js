import React from 'react';
import { connect } from 'react-redux'; //Make sure to add this connect up here to hook up the mapStateToProps, in every component using mapstatetoprops or mapstatetodispatch
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  }
}
export default connect(mapStateToProps)(AddedFeatures); //Add the connect here taking MapStatetoProps
