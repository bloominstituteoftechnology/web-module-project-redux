import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


//the point of using redux is to eliminate state and prop drilling from the UI
//because we took the props out of these components, we need to connect them with 'connect' inside the component file




const App = () => {
  

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures/>
      </div>
      <div className="box">
        <AdditionalFeatures/>
        <Total/>
      </div>
    </div>
  );
};
//If we are passing down props through these components, when using Redux, we go into each of those components and write the mapsStateToProps instead of that prop drilling
export default App;
