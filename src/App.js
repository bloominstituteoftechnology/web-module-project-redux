import React from 'react';
import {connect} from 'react-redux'; 
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature, removeFeature} from './actions/actions'


class App extends React.Component{

  render() {
    return (

      <div className="boxes">
        <div className="box">
          <Header car={this.props.car} />
          <AddedFeatures car={this.props.car} />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures={this.props.additionalFeatures} />
          <Total car={this.props.car} additionalPrice={this.props.additionalPrice} />
        </div>
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    additionalPrice: state.additionalPrice,
    car: {
      ...state.car,
      features: [...state.car.features]  
    },
    additionalFeatures: [...state.additionalFeatures]
  };
};

export default connect(mapStateToProps, {addFeature, removeFeature})(App);