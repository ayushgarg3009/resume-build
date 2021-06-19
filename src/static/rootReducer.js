import initialState from './initialState.json';
import * as actionCodes from '../actions/actionTypes';
import update from 'immutability-helper'
import { combineReducers } from 'redux'
import contactReducer from './contactReducer'
import authReducer from './authReducer'
import educationReducer from './educationReducer'
import documentReducer from './documentReducer'
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";


// export default function rootReducer(state=initialState, action){
//     // console.log("hello");

//     switch(action.type){
//         case actionCodes.SET_SKIN:
//             return update(state,{document:{skinCd:{$set:action.skinCd}}});
//         case actionCodes.ADD_CONTACT:
//             return update(state,{contactSection:{$set:action.contactSection}});
//         case actionCodes.ADD_EDUCATION:
//             return update(state,{educationSection:{$set:action.educationSection}});
//         default:
//             return state;
//     }

//     // return state;
// }



const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase:firebaseReducer,
  auth:authReducer,
    document:documentReducer,
    contact:contactReducer,
    education:educationReducer
  })

  export default rootReducer