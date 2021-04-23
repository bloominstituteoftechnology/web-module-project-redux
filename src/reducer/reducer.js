//IN REDUX WE DO NOT USE useReducer
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/action'; //importing the variable names of our actions
//.. to go up a folder, 1 dot when in the folder already. had to go out of folder, leave reducer, go into actions

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
      case ADD_FEATURE ://add_feature//
        console.log("ADD_FEATURE action running in reducer file");
        
        return {
          ...state,
          car: { 
            ...state.car, //b/c we just want to change features
            features : [...state.car.features, action.payload]},
            additionalPrice: state.additionalPrice + action.payload.price,
            additionalFeatures: state.additionalFeatures.filter(item => {
              return (
                item !== action.payload //if our item is NOT our argument, then show the ones we did NOT click on
              )
            })
            //this 'features' is NOT the parameter from action, 'payload' is what that 'feature' param is going to be
          
        };
      
        case REMOVE_FEATURE :
          return{
            ...state,
            car: {
              ...state.car,
              features: state.car.features.filter(item => {
                return(
                  item !== action.payload
                )
              })
            },
            additionalPrice: state.additionalPrice - action.payload.price,
            additionalFeatures: [...state.additionalFeatures, action.payload]
          }
        default:
          return state;
    }
};