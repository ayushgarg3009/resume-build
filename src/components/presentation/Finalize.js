import React from "react";
import { NavLink } from 'react-router-dom';

import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { connect } from 'react-redux'
import html2canvas from 'html2canvas';
import Slider from "react-slick";
import * as documentActions from '../../actions/documentActions';
import { bindActionCreators } from 'redux';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const { jsPDF } = require("jspdf");



class Finalize extends React.Component {

  constructor(props,context) {
    super(props,context)
    this.state = {
      educationSection:this.props.educationSection,
      contactSection:this.props.contactSection,
      // skinCd: this.props.skinCd
      document: this.props.document,

      
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

  
  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps.document.bgcolor);
  //   this.setState({document:nextProps.document});
  // }

  static getDerivedStateFromProps(props,state){
    console.log(props.document.bgcolor);
    return{
      document: props.document
    }
  }

onFontFamily = async (fontfamily) => {
  console.log(fontfamily)
  // this.props.documentActions.updateSkinCd(this.state.document.id, skinCd);
  
    await this.props.documentActions.updateFontFamily(this.state.document.id, fontfamily)
}

onFontSize = async (fontsize) => {
  console.log(fontsize)
  // this.props.documentActions.updateSkinCd(this.state.document.id, skinCd);
  
    await this.props.documentActions.updateFontSize(this.state.document.id, fontsize)
}


oncolor = async (color) => {
  console.log(color)
  // this.props.documentActions.updateSkinCd(this.state.document.id, skinCd);
  
    await this.props.documentActions.updateBgColor(this.state.document.id, color)
  
}

  onChange = (skinCd) => {

    // console.log(event.target.value);
    // this.setState({...this.state, educationSection: {...this.state.educationSection,  [event.target.name]: event.target.value  } })

    this.props.documentActions.updateSkinCd(this.state.document.id, skinCd);
  }

  // onSubmit = (e) => {
  //   // e.preventDefault();
  //   console.log(this.state.educationSection);
  // }

  onDownload=()=>{     
    console.log("download")
    // let itemBox = document.querySelector("#item");
    // let new = document.getElementById('new')
    // const doc = new jsPDF();
    // doc.text("Hello world!", 10, 10);
    // doc.save("a4.pdf");

    const input = document.getElementById('resumePreview');
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
    console.log(this.state.document.skinCd)
    console.log(this.state.document.bgcolor)
    return (
      <div className="container med finalize-page" >
        
        <div className="funnel-section ">
          <div className="finalize-preview-card" id="resumePreview">
            <ResumePreview fontsize={this.state.document.fontsize} fontfamily={this.state.document.fontfamily} bgcolor={this.state.document.bgcolor} skinCd={this.state.document.skinCd} contactSection={contactSection} educationSection={educationSection}></ResumePreview>
          </div>
          <div className="finalize-settings">
          <div className="section">
            <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>


                    <hr></hr>
                    <p className=" center">Download Resume As PDF</p>
                    <div style={{ margin: "15px" }} className=" center"><button className="btn hvr-float-shadow" type='button' onClick={this.onDownload}>Save And Download</button></div>
                    {
                        skinCodes.map((value,index) => {
                          console.log(index);
                          
                          if(this.state.document.skinCd==value){
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={this.state.document.skinCd==value?'fa fa-check-circle selected' :'hide'} aria-hidden="true" ></i>
                                <img  className={this.state.document.skinCd==value?'active':''} src={'/images/' + value + '.svg'}/>
                                <button className="btn-select-theme" onClick={()=>this.onChange(value)}  type='button'>USE TEMPLATE {index}</button>
                            </div>);
                          }
                            
    
                        })
                    }
                    <hr></hr>
                    <div>
                      <p className=" center">Change Font Family</p>
                      <div className="funnel-section " >
                        <div style={{ cursor: "pointer" }}  onClick={()=>this.onFontFamily("josefin")} ><p>Josefin</p></div>
                        {/* className={this.state.document.bgcolor ? "skin1 hell":"" } */}
                        {/* style={{color: this.state.document.bgcolor}} */}
                        <div style={{ cursor: "pointer" }}  onClick={()=>this.onFontFamily("cursive")} ><p>Roboto</p></div>
                        <div style={{ cursor: "pointer" }}  onClick={()=>this.onFontFamily("monospace")} ><p>Montserrat</p></div>
                      </div>
                      
                    </div>

                    <hr></hr>
                    <div>
                      <p className=" center">Change Font Size</p>
                      <div className="funnel-section " >
                        <div style={{ cursor: "pointer" }}  onClick={()=>this.onFontSize("1px")} ><p>Small</p></div>
                        {/* className={this.state.document.bgcolor ? "skin1 hell":"" } */}
                        {/* style={{color: this.state.document.bgcolor}} */}
                        <div style={{ cursor: "pointer" }}  onClick={()=>this.onFontSize("4px")} ><p>Medium</p></div>
                        <div style={{ cursor: "pointer" }}  onClick={()=>this.onFontSize("7px")} ><p>Large</p></div>
                      </div>
                      
                    </div>
                    <hr></hr>
                    <div style= {{ margin: "10px" }}>
                      <p className=" center">Change Color</p>
                      <div className="funnel-section " >
                        <div style={{ cursor: "pointer", backgroundColor:"red",width: "20px",
                            height: "20px", borderRadius: "50%", border: "2px solid black"}}  onClick={()=>this.oncolor("red")} ></div>
                        {/* className={this.state.document.bgcolor ? "skin1 hell":"" } */}
                        {/* style={{color: this.state.document.bgcolor}} */}
                        <div style={{ cursor: "pointer", backgroundColor:"blue",width: "20px",
                            height: "20px", borderRadius: "50%", border: "2px solid black"}} onClick={()=>this.oncolor("blue")} ></div>
                        <div style={{ cursor: "pointer", backgroundColor:"teal",width: "20px",
                            height: "20px", borderRadius: "50%", border: "2px solid black"}}  onClick={()=>this.oncolor("teal")} ></div>
                        </div>
                      
                    </div>
                    <hr></hr>


                    

                    

                   
                    <p className=" center">Change Template</p>
                      <div className=" center"><label className ="expand " for="check">Click Template</label></div>

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
  console.log(state.document.bgcolor);
  return{
    // auth:authReducer,
    educationSection:state.education,
      contactSection:state.contact,
      // skinCd:state.document.skinCd
      document: state.document
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
     documentActions:bindActionCreators(documentActions, dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Finalize)