//Build action creators

export const UPDATE_ADD_FEATURE = 'UPDATE_ADD_FEATURE';
export const updateAddFeature = (feature) => {
    return { type:UPDATE_ADD_FEATURE, payload: feature}
};

export const DELETE_FEATURE = 'DELETE_FEATURE';
export const deleteFeature = () => {
    return { type:DELETE_FEATURE }
}