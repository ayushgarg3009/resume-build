import * as actionTypes from './actionTypes';

export const signIn=(userData)=>{

    return async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        
        await firebase.auth().signInWithEmailAndPassword(
            userData.email,
            userData.password
        ).then(() => {
            dispatch({type: actionTypes.SIGN_IN})
        }).catch((err) => {
            dispatch({type: actionTypes.SIGN_IN_FAILED,err})
        });
    }
}

export const register=(userData)=>{
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();        
        firebase.auth().createUserWithEmailAndPassword(
            userData.email,
            userData.password
        ).then(() => {
            dispatch({type: actionTypes.REGISTER})
        }).catch((err) => {
            dispatch({type: actionTypes.REGISTER_FAILED,err})
        });
    }
}

// export const signIn=(userData)=>{

//     return {type: actionTypes.SIGN_IN, userData:userData}

    
// }

// export function signout(){
//     return {type: actionTypes.SIGN_OUT}
// }


export const signOut=()=>{
    return async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();        
        await firebase.auth().signOut().then(()=>
            dispatch({type: actionTypes.SIGN_OUT})
        )
        .catch((err) => {
            dispatch({type: actionTypes.REGISTER_FAILED,err})
        });
    }
}