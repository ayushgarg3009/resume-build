import React from "react";
import { NavLink } from 'react-router-dom';

import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { connect } from 'react-redux'

import * as educationActions from '../../actions/educationActions';
import { bindActionCreators } from 'redux';

class Education extends React.Component {

  constructor(props,context) {
    super(props,context)
    this.state = {
      contactSection:this.props.contactSection,
      educationSection:this.props.educationSection,
      // skinCd: this.props.skinCd,
      document: this.props.document


      // educationSection: {

      // },
      // contactSection: {
        
      //   CITY: "Delhi",
      //   CNTY: "India",
      //   EMAI: "ayushgarg3009@gmail.com",
      //   FNAM: "Ayush",
      //   LNAM: "Garg",
      //   PHON: "7503734903",
      //   PROF: "dddf",
      //   PRSU: "adfgvdrf",
      //   STAT: "Delhi",
      //   STRT: "House No.-137, Sector-1, Chiranjiv Vihar",
      //   ZIPC: "201002"
      // }
    }
  }

  // componentWillMount(){
  //   if(!this.state.document || !this.state.document.id){
  //       this.props.history.push('/getting-started');
  //   }
  // }

  onChange = (event) => {

    console.log(event.target.value);

    this.setState({...this.state, educationSection: {...this.state.educationSection,  [event.target.name]: event.target.value  } })
   // this.setState({educationSection:{...this.state.educationSection,  [event.target.name]: event.target.value  } })
  }

  onSubmit = async (e) => {
    // e.preventDefault();
    console.log(this.state.educationSection);

    if(this.state.contactSection && this.state.educationSection.id){
      await this.props.educationActions.update(this.state.document.id, this.state.educationSection);
  }
  else{
    await this.props.educationActions.add(this.state.document.id, this.state.educationSection);
  }


    // this.props.educationActions.add(this.state.educationSection);
    await this.props.history.push('/finalize');
  }
  render() {
    const { educationSection, contactSection } = this.state
    return (
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Educational Section</h2>
            <div className="form-section">
              <div className="input-group"><label>College Name</label>
                <div className="effect"><input type="text" name={fieldCd.SchoolName}
                  onChange={this.onChange} value={educationSection[fieldCd.SchoolName]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Degree</label>
                <div className="effect"><input type="text" name={fieldCd.Degree}
                  onChange={this.onChange} value={educationSection[fieldCd.Degree]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>CGPA</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationCGPA}
                  onChange={this.onChange} value={educationSection[fieldCd.GraduationCGPA]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>City/State</label>
                <div className="effect"><input type="text"  name={fieldCd.City}
                  onChange={this.onChange} value={educationSection[fieldCd.City]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Month</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationDate}
                  onChange={this.onChange} value={educationSection[fieldCd.GraduationDate]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Year</label>
                <div className="effect"><input type="text"  name={fieldCd.GraduationYear}
                  onChange={this.onChange} value={educationSection[fieldCd.GraduationYear]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={this.onSubmit}>Next</button>
                <NavLink to='/contact' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview skinCd={this.state.document.skinCd} contactSection={contactSection} educationSection={educationSection}></ResumePreview>
            
          </div>
        </div>
      </div>
    );
  }
}

  
// export default  Education

const mapStateToProps=(state)=>{
  return{
        // contactSection:state.contactSection,
        // educationSection:state.educationSection,

      contactSection:state.contact,
      educationSection:state.education,
      // skinCd:state.document.skinCd
      document:state.document
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{

      educationActions:bindActionCreators(educationActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Education)
