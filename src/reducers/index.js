import { combineReducers } from 'redux';
import {featuresReducer} from './featuresReducer';

export default combineReducers({
    features: featuresReducer,
    
});