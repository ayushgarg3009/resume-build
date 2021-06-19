// import React from 'react';
// import logo from "../../static/images/resume.png";
// import { NavLink } from "react-router-dom";


// // import React from "react";

// // import {NavLink} from "react-router-dom";
// import {fieldCd, skinCodes}  from '../../constants/typeCodes';

// import ResumePreview from './resumePreview'
// import { connect } from "react-redux";

// // import * as contactActions from '../../actions/contactActions';
// import { bindActionCreators } from 'redux';

// class Dashboard extends React.Component {
//   constructor(props,context) {
//     super(props,context)
//     this.state = { 
//       educationSection: {
//         SCHO: "AM",
//         DGRE: "b.TECH",
//         gRCG: "7.7",
//         CITY: "DELHI",
//         GRDT: "JAN",
//       },
//       contactSection: {
        
//         CITY: "Delhi",
//         CNTY: "India",
//         EMAI: "ayushgarg3009@gmail.com",
//         FNAM: "Ayush",
//         LNAM: "Garg",
//         PHON: "7503734903",
//         PROF: "dddf",
//         PRSU: "adfgvdrf",
//         STAT: "Delhi",
//         STRT: "House No.-137, Sector-1, Chiranjiv Vihar",
//         ZIPC: "201002"
//       }
       
//     }
//   }
    
//   render() { 
//     const { educationSection, contactSection } = this.state
//     return (
//           <div className="container med contact">
//             <h1>Dashboard</h1>
//             <div className="finalize-preview-card" id="resumePreview">
//             <ResumePreview  contactSection={contactSection} educationSection={educationSection}></ResumePreview>
//           </div>
//         </div>
        
//     );
//   }
// }
 

// // export default Dashboard

// const mapStateToProps=(state)=>{
//   return{
//     // auth:authReducer,
//     educationSection:state.education,
//       contactSection:state.contact,
//       // skinCd:state.document.skinCd
//       document: state.document
//   }
// }
// export default connect(mapStateToProps)(Dashboard)







import React from "react";

import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import * as documentActions from '../../actions/documentActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'



class Dashboard extends React.Component {

  constructor(props,context) {
    super(props,context)
    this.state = {
      resumes: this.props.resumes,
      document: this.props.document,
      educationSection: this.props.educationSection,
      contactSection:this.props.contactSection,
      // document:this.props.document,
      // resumes:this.props.firestore.ordered.resumes
    }
  }

  // componentWillReceiveProps(nextProps){
  //       console.log(nextProps);
  //       this.setState({resumes:nextProps.resumes})
  //     }

  static getDerivedStateFromProps(props,state){
    console.log(props);
    return{
      resumes: props.resumes
    }
  }
  
      onEdit = async (resume) => {
        console.log(resume.id);
        console.log(this.state.document.id);
        await this.props.documentActions.updateSkinCd(resume.id, resume.document.skinCd);
        await this.props.history.push('/getting-started');
      };

  onDelete = (document) => {
    console.log(document.id);
    this.props.documentActions.removeTask(document);
  };
  
  render() {
    const { resumes,document} = this.state
  
    console.log(resumes);
        if(resumes){
      console.log(resumes)
      resumes.map((task) => console.log(task.id))
    
    }
    if(resumes){
      return (
        <div>
          
            {resumes && resumes.map(resume=>{
            {/* console.log(resume);  */}
            
            return ( 
              <div className="container contract section funnel-section" >
                <div className="funnel-section form-card">
                  <div className="finalize-preview-card ">
                    <ResumePreview fontfamily={resume.fontfamily} fontsize={resume.fontsize} bgcolor={resume.bgcolor} contactSection={resume.contactSection} educationSection={resume.educationSection} ></ResumePreview> 

                    {/* <button style={{ cursor: "pointer" }}
                  onClick={()=>this.onEdit(resume)}>Edit</button> */}

                  <i style={{ cursor: "pointer", margin:"20px" }}
                  onClick={()=> this.onEdit(resume)} className="fas fa-edit fa-5x"></i>


                {/* <button style={{ cursor: "pointer" }} className="btn hvr-float-shadow"
                  onClick={()=>this.onChange(resume)}><i class="fas fa-trash"></i> </button> */}

                  <i style={{ cursor: "pointer" }} className="btn hvr-float-shadow"
                  onClick={()=>this.onDelete(resume)} className="fas fa-trash fa-5x"></i> 
                  </div>
                </div>
                
              </div>
            ) 
              
            })}
          
              </div>
      );
    }
    else {
          return (
              <div className="container contract" >
                  <p>Loading project...</p>
              </div>
          )
    }
  }
}

  

const mapStateToProps=(state)=>{
  console.log(state);
  console.log(state.firestore.ordered);
  console.log(state.firestore.ordered.resumes);
  console.log(state.document)
  // console.log(state.firestore.ordered.resumes[0]);
  console.log(state.contactSection);
  const resumes = state.firestore.ordered.resumes;
  return {
    resumes: resumes,
    educationSection:state.education,
    contactSection:state.contact,
    // skinCd:state.document.skinCd
    document: state.document
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    documentActions:bindActionCreators(documentActions, dispatch)
  };
};

    

// export default connect(mapStateToProps)(Dashboard)

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
      { collection: 'resumes' }
  ])
)(Dashboard)








// import React from "react";

// import ResumePreview from './resumePreview'
// import {skinCodes, fieldCd} from './../../constants/typeCodes';
// import * as documentActions from '../../actions/documentActions';
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase'
// import { compose } from 'redux'
// import { Redirect } from 'react-router-dom'

// const Dashboard = (props) => {
//     console.log(props);
    
//     const { resumes } = props;

//     if(resumes){
//       console.log(resumes)
//       resumes.map((task) => console.log(task.id))
    
//     }
//     componentWillMount() {
//     this.setState({resumes: this.props.children});
// }
    
//     // resumes && resumes.map((resume) => console.log(resume.id))

//     // console.log(resumes)
    
//     // console.log(resumes.id)
   
    
//         return (
//           <>
          
//                   {/* {resumes.map((task) => console.log(task.id))} */}
                   
                   
//                  </>
//         )
      
    
    
// }

// const mapStateToProps = (state, ownProps) => {
//     console.log(state);
//     // const id = ownProps.match.params.id;
//     const resumes = state.firestore.data.resumes;
    
//     // const resume = resumes ? resumes[id] : null
//     return {
//         resumes: resumes,
//         // auth: state.firebase.auth
//     }
// }

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//       { collection: 'resumes' }
//   ])
// )(Dashboard)