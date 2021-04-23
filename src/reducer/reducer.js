//Here we moved over the state to be initialized here in the reducer
const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };
  //Here we are hooking up the Redux flow
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ://add_feature//
        console.log("add_feature action running in reducer file")
        return {
          ...state,
          //add a feature
        };
      
        case ://remove_feature//
          console.log("remove_feature action running in reducer file")
          return {
            ...state,
            //remove a feature
          };

        case ://update_total//
          console.log("update_total action running in reducer file")
          return {
            ...state,
            //update the total
          };
        default:
          return state;
    }
};