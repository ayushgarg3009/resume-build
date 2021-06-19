import * as actionTypes from './actionTypes'
const { v4: uuidv4 } = require('uuid');

// export function add(contactSection){
//     return {type: actionTypes.ADD_CONTACT, contactSection : contactSection}
// }

// export function update(contactSection){
//     return {type: actionTypes.UPDATE_CONTACT, contactSection : contactSection}
// } 


export const add=(documentId, contactSection)=>{
    return async (dispatch, getstate,{getFirebase, getFirestore})=>{

        // console.log(getstate());
        const firestore = getFirestore();
        contactSection.id = uuidv4();
        contactSection.createdDate = new Date();
        await firestore.collection('resumes').doc(documentId).set({ contactSection: contactSection }, {merge: true }).then(()=>
            dispatch({type: actionTypes.ADD_CONTACT, contactSection : contactSection})
        ).catch((error)=>
            dispatch({type: actionTypes.ADD_CONTACT_ERROR, error : error})
        )
    }
}

export const update=(documentId, contactSection)=>{
    return async (dispatch, getstate,{getFirebase, getFirestore})=>{

        // console.log(getstate());
        const firestore = getFirestore();
        
        contactSection.modifiedDate = new Date();
        await firestore.collection('resumes').doc(documentId).set({contactSection: contactSection }, {merge: true }).then(()=>
            dispatch({type: actionTypes.UPDATE_CONTACT, contactSection : contactSection})
        ).catch((error)=>
            dispatch({type: actionTypes.UPDATE_CONTACT_ERROR, error : error})
        )
    }
}
