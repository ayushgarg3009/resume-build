import initialState from './initialState.json';
import * as actionCodes from '../actions/actionTypes';
import update from 'immutability-helper'

// export default function documentReducer(state = initialState.document, action) {
//     switch(action.type){
//         case actionCodes.SET_SKIN:
//             return update(state,{skinCd:{$set:action.skinCd}});
//         default:
//             return state;
//     }
//   }

export default function documentReducer(state = initialState.document, action) {
    switch(action.type){
        case actionCodes.SET_SKIN:
            return update(state,{$set:action.document});
        case actionCodes.UPDATE_SKIN:
            return update(state,{$merge:action.document});
        case "REMOVE_TASK": {
                // toast.warn("A task was removed...");
                return state;
        }
        case "REMOVE_TASK_ERR": {
                // toast.error("A task remove error occured....");
                return state;
        }
        case "UPDATE_BGCOLOR": {
            return update(state,{$merge:action.document});
        }
        case "UPDATE_BGCOLOR_ERROR": {
            return state;
        }

        case "UPDATE_FONTFAMILY": {
            return update(state,{$merge:action.document});
        }
        case "UPDATE_FONTFAMILY_ERROR": {
            return state;
        }

        case "UPDATE_FONTSIZE": {
            return update(state,{$merge:action.document});
        }
        case "UPDATE_FONTSIZE_ERROR": {
            return state;
        }
        default:
            return state;
    }
  }