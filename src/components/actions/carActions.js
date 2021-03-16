//Build action creators
export const UPDATE_TOTAL_PRICE = 'UPDATE_TOTAL_PRICE';
export const updateTotalPrice = () => {
    return { type:UPDATE_TOTAL_PRICE }
};

export const UPDATE_ADDITIONAL_PRICE = 'UPDATE_ADDITIONAL_PRICE';
export const updateAdditionalPrice = () => {
    return { type:UPDATE_ADDITIONAL_PRICE }
};

export const UPDATE_ADD_FEATURE = 'UPDATE_ADD_FEATURE';
export const updateAddFeature = () => {
    return { type:UPDATE_ADD_FEATURE }
};

export const DELETE_FEATURE = 'DELETE_FEATURE';
export const deleteFeature = () => {
    return { type:DELETE_FEATURE }
}