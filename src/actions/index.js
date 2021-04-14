import { bindActionCreators } from "redux";

export const ADD_ADDITIONAL_FEATURE = "ADD_ADDITIONAL_FEATURE";


export const
 addAdditionalFeature = ( additionalFeature ) => {
     return ({ type: ADD_ADDITIONAL_FEATURE , payload: additionalFeature }) 
 }