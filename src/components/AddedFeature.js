import React from 'react';
import {useDispatch} from "react-redux"; 
import {removeFeature} from '../actions/actions'


const AddedFeature = props => {

  const dispatch = useDispatch()
  console.log(props)

  return (
    <li>
      <button className="button" onClick={() => {dispatch(removeFeature(props.feature))}}>X</button>
      {props.feature.name}
    </li>
  );
};
export default AddedFeature;