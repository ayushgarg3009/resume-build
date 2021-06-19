import React from "react";
import {NavLink} from "react-router-dom";
import {fieldCd, skinCodes}  from '../../constants/typeCodes';

import ResumePreview from './resumePreview'
import { connect } from "react-redux";

import * as contactActions from '../../actions/contactActions';
import { bindActionCreators } from 'redux';

  class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);
            this.state = {
                
                contactSection:this.props.contactSection,
                // skinCd: this.props.skinCd
                document: this.props.document
                // name:''
                // contactSection:{
                //     // "FNAM":'', 
                //     // "LNAM":""
                // }
            };      
    }

    // componentWillMount(){
    //     if(!this.state.document || !this.state.document.id){
    //         this.props.history.push('/getting-started');
    //     }
    // }

    onNameChange=(event)=>{
        // this.setState({name:event.target.value})
        // console.log(event.target.value);

        // console.log(contactSection);

        var key = event.target.name;
        var val = event.target.value;

        // console.log(event.target.name);
        // console.log(event.target.value);

        this.setState({contactSection: {...this.state.contactSection, [key]:val}});
        

    }

    onSubmit= async ()=>{
        console.log(this.state.contactSection);

            if(this.state.contactSection && this.state.contactSection.id){
                await this.props.contactActions.update(this.state.document.id, this.state.contactSection);
            }
            else{
                await this.props.contactActions.add(this.state.document.id, this.state.contactSection);
            }

        // this.props.contactActions.add(this.state.contactSection);

        this.props.history.push('/education');
    }
  render() { 
    return (
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Personal Details</h2>
                    <div className="form-section">
                        <div className="input-group"><label>First Name</label>
                            <div className="effect"><input type="text" name={fieldCd.FirstName} value={this.state.contactSection[fieldCd.FirstName]}  onChange={this.onNameChange}   /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Last Name</label>
                            <div className="effect"><input type="text" name={fieldCd.LastName} value={this.state.contactSection[fieldCd.LastName]}  onChange={this.onNameChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group full"><label>Professional Summary</label>
                            <div className="effect"><input type="text" name={fieldCd.ProfSummary} value={this.state.contactSection[fieldCd.ProfSummary]}  onChange={this.onNameChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Email</label>
                            <div className="effect"><input type="text"  name={fieldCd.Email} value={this.state.contactSection[fieldCd.Email]}  onChange={this.onNameChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Phone</label>
                            <div className="effect"><input type="text"  name={fieldCd.Phone} value={this.state.contactSection[fieldCd.Phone]}  onChange={this.onNameChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Profession</label>
                            <div className="effect"><input type="text"  name={fieldCd.Profession} value={this.state.contactSection[fieldCd.Profession]}  onChange={this.onNameChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Street</label>
                            <div className="effect"><input type="text" name={fieldCd.Street} value={this.state.contactSection[fieldCd.Street]}  onChange={this.onNameChange}  /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>City</label>
                            <div className="effect"><input type="text" name={fieldCd.City} value={this.state.contactSection[fieldCd.City]}  onChange={this.onNameChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>State</label>
                            <div className="effect"><input type="text"   name={fieldCd.State}  value={this.state.contactSection[fieldCd.State]}  onChange={this.onNameChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>


                        <div className="input-group"><label>Country</label>
                            <div className="effect"><input type="text"  name={fieldCd.Country} value={this.state.contactSection[fieldCd.Country]}  onChange={this.onNameChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Pin Code</label>
                            <div className="effect"><input type="text" name={fieldCd.ZipCode} value={this.state.contactSection[fieldCd.ZipCode]}  onChange={this.onNameChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="form-buttons">
                            <button onClick={this.onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                            <NavLink to='/getting-started' className="center">Back</NavLink>
                        </div>
                    </div>

                </div>

                <div className="preview-card">
                    <ResumePreview contactSection={this.state.contactSection} skinCd={this.state.document.skinCd} ></ResumePreview>
                </div>

            </div>
        </div>
    );
  }
}
 
//   export default Contact

const mapStateToProps=(state)=>{
    return{
        
        // contactSection:state.contactSection,
        contactSection:state.contact,
        // skinCd:state.document.skinCd
        document: state.document
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{

        contactActions:bindActionCreators(contactActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Contact)