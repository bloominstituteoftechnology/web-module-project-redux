export const ADDED_FEATURE = "ADDED_FEATURE";
export const DELETE_FEATURE = "DELETE_FEATURE"

export const addedFeature = (feature) =>{
    return {type:ADDED_FEATURE, payload: feature} //payload is the action 
} 
export const deleteFeature = (feature) =>{
    return {type:DELETE_FEATURE, payload: feature}
}