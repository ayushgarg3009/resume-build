import React from "react";
import { NavLink } from 'react-router-dom';

import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { connect } from 'react-redux'
import html2canvas from 'html2canvas';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const { jsPDF } = require("jspdf");



class Finalize extends React.Component {

  constructor(props,context) {
    super(props,context)
    this.state = {
      educationSection:this.props.educationSection,
      contactSection:this.props.contactSection,
      skinCd: this.props.skinCd
      // educationSection: {
      //   SCHO: "AM",
      //   DGRE: "b.TECH",
      //   gRCG: "7.7",
      //   CITY: "DELHI",
      //   GRDT: "JAN",
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

  onChange = (event) => {

    console.log(event.target.value);
    this.setState({...this.state, educationSection: {...this.state.educationSection,  [event.target.name]: event.target.value  } })
  }

  onSubmit = (e) => {
    // e.preventDefault();
    console.log(this.state.educationSection);
  }

  onDownload=()=>{     
    console.log("download")
    // let itemBox = document.querySelector("#item");
    // let new = document.getElementById('new')
    // const doc = new jsPDF();
    // doc.text("Hello world!", 10, 10);
    // doc.save("a4.pdf");

    const input = document.getElementById('new');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      });
      this.props.history.push('/dashboard')
  }
   
  render() {

    const ArrowLeft = (props) => (
      <div className="left-arrow">
          <i
          {...props}
          className="fas fa-arrow-left fa-5x" ></i>
      </div>
      
  );
  const ArrowRight = (props) => (
    <div className="right-arrow">
          <i
          {...props}
          className="fas fa-arrow-right fa-5x" ></i>
      </div>
  );  

    const settings = {
      arrows: true,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />,
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };
    const { educationSection, contactSection } = this.state
    return (
      <div className="container med finalize-page" >
        
        <div className="funnel-section ">
          <div className="finalize-preview-card" id="new">
            <ResumePreview  contactSection={contactSection} educationSection={educationSection}></ResumePreview>
          </div>
          <div className="finalize-settings">
          <div className="section">
            <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div><button className="btn hvr-float-shadow" type='button' onClick={this.onDownload}>Save And Download</button></div>
                    {
                        skinCodes.map((value,index) => {
                          console.log(index);
                          if(this.state.skinCd==value){
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={this.state.skinCd==value? 'fa fa-check-circle selected' :'hide'} aria-hidden="true" ></i>
                                <img  className="{this.state.skinCd==value? 'active' :''} " src={'/images/' + value + '.svg'}/>
                                <button className="btn-select-theme" onClick={()=>this.onChange(value)}  type='button'>USE TEMPLATE {index}</button>
                            </div>);
                          }
                            
    
                        })
                    }

                   

                      <label className ="expand " for="check">Click me</label>

                      <input id="check" type="checkbox" />

                      <div className="test">
                      <div className="styleTemplate ">
                    <Slider {...settings}>
                    {
                        skinCodes.map((value,index) => {
                          console.log(index);
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={this.state.skinCd==value? 'fa fa-check-circle selected' :'hide'} aria-hidden="true" ></i>
                                <img  className="{this.state.skinCd==value? 'active' :''} " src={'/images/' + value + '.svg'}/>
                                <button className="btn-select-theme" onClick={()=>this.onChange(value)}  type='button'>USE TEMPLATE {index}</button>
                            </div>);
    
                        })
                    }
                    </Slider>
                    </div>
                      </div>



                    
                    </div>
          </div>
        </div>
      </div>
    );
  }
}


// export default Finalize;

const mapStateToProps=(state)=>{
  return{
    // auth:authReducer,
    educationSection:state.education,
      contactSection:state.contact,
      skinCd:state.document.skinCd
  }
}

export default connect(mapStateToProps,null) (Finalize);

