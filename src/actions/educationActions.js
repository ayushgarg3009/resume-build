import * as actionTypes from './actionTypes'
const { v4: uuidv4 } = require('uuid');


// export function add(educationSection){
//     return {type: actionTypes.ADD_EDUCATION, educationSection : educationSection}
// }

// export function update(educationSection){
//     return {type: actionTypes.ADD_EDUCATION, educationSection : educationSection}
// }



export const add=(documentId, educationSection)=>{
    return async (dispatch, getstate,{getFirebase, getFirestore})=>{

        // console.log(getstate());
        const firestore = getFirestore();
        educationSection.id = uuidv4();
        educationSection.createdDate = new Date();
        await firestore.collection('resumes').doc(documentId).set({ educationSection: educationSection }, {merge: true }).then(()=>
            dispatch({type: actionTypes.ADD_EDUCATION, educationSection : educationSection})
        ).catch((error)=>
            dispatch({type: actionTypes.ADD_EDUCATION_ERROR, error : error})
        )
    }
}

export const update=(documentId, educationSection)=>{
    return async (dispatch, getstate,{getFirebase, getFirestore})=>{

        // console.log(getstate());
        const firestore = getFirestore();
        
        educationSection.modifiedDate = new Date();
        await firestore.collection('resumes').doc(documentId).set({educationSection: educationSection }, {merge: true }).then(()=>
            dispatch({type: actionTypes.UPDATE_EDUCATION, educationSection : educationSection})
        ).catch((error)=>
            dispatch({type: actionTypes.UPDATE_EDUCATION_ERROR, error : error})
        )
    }
}