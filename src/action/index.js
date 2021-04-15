export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE";

export const removeFeature = (id) => {
	return { type: REMOVE_FEATURE, payload: id };
};

export const addFeature = (item) => {
	console.log(item.name);
	return { type: ADD_FEATURE, payload: item };
};
