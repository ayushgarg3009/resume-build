import initialState from './initialState.json';
import * as actionCodes from '../actions/actionTypes';
import update from 'immutability-helper'

export default function educationReducer(state = initialState.educationSection, action) {
    switch(action.type){
        case actionCodes.ADD_EDUCATION:
            return update(state,{$set:action.educationSection});
        case actionCodes.UPDATE_EDUCATION:
            return update(state,{$merge:action.educationSection});
        default:
            return state;
    }
  }