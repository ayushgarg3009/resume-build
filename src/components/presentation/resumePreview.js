import React from 'react';
import {fieldCd} from './../../constants/typeCodes'


class ResumePreview extends React.PureComponent{

    rvContact=(key, valToAppend)=>{
        if(this.props.contactSection){
            return this.props.contactSection[key] ? this.props.contactSection[key] + (valToAppend ? valToAppend: ''):'';
        }

        return '';
    }
    
    rvEducation=(key, valToAppend)=>{


        if(this.props.educationSection){
            return this.props.educationSection[key] ? this.props.educationSection[key] + (valToAppend ? valToAppend: ''):'';
        }

        return '';
    }
    render() {    
        // {this.props.contactSection[fieldCd.FirstName]}
      
        console.log(this.props.skinCd);
        console.log(this.props.bgcolor);
        console.log(this.props.fontfamily);
        console.log(this.props.fontsize);
        let {rvContact, rvEducation} = this;
        // style={{backgroundColor:backgroundColor: this.props.bgolor'}}
        // if(this.props.skinCd=="skin1"){
            return (
                <div style={{ fontSize:"50px" , backgroundColor: this.props.bgcolor, fontFamily: this.props.fontfamily }} className={"resume-preview skin1 "}>
                    <div className={'name-section'}>
                        <p className={'center contact-name text-upper'}> {rvContact(fieldCd.FirstName,' ') + rvContact(fieldCd.LastName)} </p>
                        <p className={'center address'}>{rvContact(fieldCd.City,', ') + rvContact(fieldCd.State,', ') + rvContact(fieldCd.Country,', ') + rvContact(fieldCd.ZipCode,', ')}</p>
                        <p className={'center'}>{rvContact(fieldCd.Email)}</p>
                        <p className={'center'}>{rvContact(fieldCd.Phone)}</p>
                    </div>
                    <div className={'profSummSection text-upper'}>                   
                        <p className="heading bold">PROFESSIONAL DETAILS</p>
                         <div className={'divider'}></div>
                         <p>{rvContact(fieldCd.ProfSummary)}</p>
                    </div>
                
                    
    
    
                    <div className={'educationSection text-upper'}>                   
                        <p className="heading bold">EDUCATIONAL DETAILS</p>
                        <div className={'divider'}></div>
                         <p>{rvEducation(fieldCd.SchoolName)}</p>
                         <p>{rvEducation(fieldCd.Degree)}</p>
                         <p>{rvEducation(fieldCd.City)}</p>
                         <p>{rvEducation(fieldCd.GraduationCGPA)}</p>
                         <p>{rvEducation(fieldCd.GraduationDate)}</p>
                         <p>{rvEducation(fieldCd.GraduationYear)}</p>
                         <p></p>
                    </div>
              
    
    
                </div>
    
                
            )
        // } 



        // if(this.props.skinCd=="skin2"){
        //     return (
        //         <div className={"resume-preview skin2"}>
        //             <div className={'name-section'}>
        //                 <p className={'left contact-name text-upper'}> {rvContact(fieldCd.FirstName,' ') + rvContact(fieldCd.LastName)} </p>
        //                 <p className={'left address'}>{rvContact(fieldCd.City,', ') + rvContact(fieldCd.State,', ') + rvContact(fieldCd.Country,', ') + rvContact(fieldCd.ZipCode,', ')}</p>
        //                 <p className={'left'}>{rvContact(fieldCd.Email)}</p>
        //                 <p className={'left'}>{rvContact(fieldCd.Phone)}</p>
        //             </div>
        //             <div className={'profSummSection text-upper'}>                   
        //                 <p className="heading bold">PROFESSIONAL DETAILS</p>
        //                  <div className={'divider'}></div>
        //                  <p>{rvContact(fieldCd.ProfSummary)}</p>
        //             </div>
                
                    
    
    
        //             <div className={'educationSection text-upper'}>                   
        //                 <p className="heading bold">EDUCATIONAL DETAILS</p>
        //                 <div className={'divider'}></div>
        //                  <p>{rvEducation(fieldCd.SchoolName)}</p>
        //                  <p>{rvEducation(fieldCd.Degree)}</p>
        //                  <p>{rvEducation(fieldCd.City)}</p>
        //                  <p>{rvEducation(fieldCd.GraduationCGPA)}</p>
        //                  <p>{rvEducation(fieldCd.GraduationDate)}</p>
        //                  <p>{rvEducation(fieldCd.GraduationYear)}</p>
        //                  <p></p>
        //             </div>
              
    
    
        //         </div>
    
                
        //     )
        // }
        
    }
}
 
export default ResumePreview;