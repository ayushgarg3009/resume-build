import gettingStarted from '../components/presentation/gettingStarted'
import * as actionTypes from './actionTypes'
const { v4: uuidv4 } = require('uuid');

// export function setSkinCd(skinCd){
//     return {type: actionTypes.SET_SKIN, skinCd : skinCd}
// }

// export function updateSkinCd(skinCd){
//     return {type: actionTypes.UPDATE_SKIN, skinCd : skinCd}
// }


export const setSkinCd= (skinCd)=>{
    return async (dispatch, getstate,{getFirebase, getFirestore})=>{

        console.log(getstate());
        const firestore = getFirestore();
        let id = uuidv4();
        let createdDate = new Date();
        // firestore.collection('resumes').doc(id).set({"document":{"id":id, "skinCd":skinCd,"createdDate": createdDate}}).then(()=>
        //     dispatch({type: actionTypes.SET_SKIN, document:{skinCd : skinCd,id: id, createdDate:createdDate}})
        // ) 
        await firestore.collection('resumes').add({"document":{"skinCd":skinCd,"createdDate": createdDate}}).then((res)=>{
            dispatch({type: actionTypes.SET_SKIN, document:{skinCd : skinCd,id: res.id, createdDate:createdDate}})
        }
        ) 
        .catch((error)=>
            dispatch({type: actionTypes.UPDATE_SKIN_ERROR, error : error})
        )
    }
}


export const updateSkinCd=(documentId, skinCd)=>{
    return async (dispatch, getstate,{getFirebase, getFirestore})=>{
        console.log(getstate);
        const firestore = getFirestore();
        let docId = uuidv4();
        let modifiedDate = new Date();
        await firestore.collection('resumes').doc(documentId)
        .set({
            "skinCd": skinCd, 
            "modifiedDate": modifiedDate 
        }, { merge:true })
        
        .then(()=>
            dispatch({type: actionTypes.UPDATE_SKIN, document:{skinCd : skinCd, modifiedDate : modifiedDate }})
        ).catch((error)=>
            dispatch({type: actionTypes.UPDATE_SKIN_ERROR, error : error})
        )
    }
}



export const removeTask = (document) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("resumes")
        .doc(document.id)
        .delete()
        .then(() => {
          dispatch({
            type: "REMOVE_TASK",
          });
        })
        .catch((err) => {
          dispatch({
            type: "REMOVE_TASK_ERR",
            err,
          });
        });
    };
};


// export const setSkinCd= (skinCd)=>{
//     return async (dispatch, getstate,{getFirebase, getFirestore})=>{

//         console.log(getstate());
//         const firestore = getFirestore();
//         let id = uuidv4();
//         let createdDate = new Date();
//         // firestore.collection('resumes').doc(id).set({"document":{"id":id, "skinCd":skinCd,"createdDate": createdDate}}).then(()=>
//         //     dispatch({type: actionTypes.SET_SKIN, document:{skinCd : skinCd,id: id, createdDate:createdDate}})
//         // ) 
//         await firestore.collection('resumes').add({"document":{bgcolor : bgcolor}}).then((res)=>{
//             dispatch({type: actionTypes.SET_SKIN, document:{skinCd : skinCd,id: res.id, createdDate:createdDate}})
//         }
//         ) 
//         .catch((error)=>
//             dispatch({type: actionTypes.UPDATE_SKIN_ERROR, error : error})
//         )
//     }
// }



export const updateBgColor=(documentId,bgcolor)=>{
    console.log(bgcolor);
    return async (dispatch, getstate,{getFirebase, getFirestore})=>{

        const firestore = getFirestore();
        let docId = uuidv4();  
        let modifiedDate = new Date();
        await firestore.collection('resumes').doc(documentId)
        .set({
            "bgcolor": bgcolor, 
            "modifiedDate": modifiedDate 
        }, { merge:true })
        
        .then(()=>
            dispatch({type: actionTypes.UPDATE_BGCOLOR, document:{bgcolor : bgcolor, modifiedDate : modifiedDate }})
        ).catch((error)=>
            dispatch({type: actionTypes.UPDATE_BGCOLOR_ERROR, error : error})
        )
    }
}


export const updateFontFamily=(documentId,fontfamily)=>{
    console.log(fontfamily);
    return async (dispatch, getstate,{getFirebase, getFirestore})=>{

        const firestore = getFirestore();
        let docId = uuidv4();  
        let modifiedDate = new Date();
        await firestore.collection('resumes').doc(documentId)
        .set({
            "fontfamily": fontfamily, 
            "modifiedDate": modifiedDate 
        }, { merge:true })
        
        .then(()=>
            dispatch({type: actionTypes.UPDATE_FONTFAMILY, document:{fontfamily : fontfamily, modifiedDate : modifiedDate }})
        ).catch((error)=>
            dispatch({type: actionTypes.UPDATE_FONTFAMILY_ERROR, error : error})
        )
    }
}


export const updateFontSize=(documentId,fontsize)=>{
    console.log(fontsize);
    return async (dispatch, getstate,{getFirebase, getFirestore})=>{

        const firestore = getFirestore();
        let docId = uuidv4();  
        let modifiedDate = new Date();
        await firestore.collection('resumes').doc(documentId)
        .set({
            "fontsize": fontsize, 
            "modifiedDate": modifiedDate 
        }, { merge:true })
        
        .then(()=>
            dispatch({type: actionTypes.UPDATE_FONTSIZE, document:{fontsize : fontsize, modifiedDate : modifiedDate }})
        ).catch((error)=>
            dispatch({type: actionTypes.UPDATE_FONTSIZE_ERROR, error : error})
        )
    }
}