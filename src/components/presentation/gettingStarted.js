import React from 'react';
import {skinCodes} from '../../constants/typeCodes';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
// import * as actionCodes from '../../actions/actionCodes';
import * as documentActions from '../../actions/documentActions';
import { bindActionCreators } from 'redux';


class GettingStarted extends React.Component{
     constructor(props, context) {
        super(props, context);
        this.state = {
            // skinCd: this.props.skinCd
            document: this.props.document,
           
        };
      }


      // componentWillReceiveProps(nextProps){
      //   console.log(nextProps);
      //   this.setState({skinCd:nextProps.skinCd})
      // }


    //   onChange = (event) => {
      onChange = async (skinCd) => {
        //   let skinCd = "skin2";
        //   this.props.setSkinCd('skin2');
        // 2.
          // this.setState({skinCd:skinCd});
        // 3. direct
          // this.props.setSkinCd(skinCd);
          // 4. documentActions
          console.log(skinCd);
          console.log(this.state.document.id);
          if(this.state.document.id){
            await this.props.documentActions.updateSkinCd(this.state.document.id,skinCd);
          }
          else{
            await this.props.documentActions.setSkinCd(skinCd);
          }
          // this.props.documentActions.setSkinCd(skinCd);
           await this.props.history.push('contact');
      }
      render(){
        
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className= "template-card rounded-border">
                                  {/* <i className={(value == this.state.skinCd? 'selected fa fa-check' :'hide')} ></i> */}
                                  <i className={(value == this.state.document.skinCd? 'selected fa fa-check' :'hide')} ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={()=>this.onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    }
}

// export default GettingStarted;

const mapStateToProps=(state)=>{
    return{
        // skinCd:state.document.skinCd
        document: state.document,

    }
  }

  const mapDispatchToProps= (dispatch)=>{
    return {
        // setSkinCd:(skinCd)=>(dispatch({type:actionCodes.SET_SKIN, skinCd : skinCd}))
        // 2.
        // setSkinCd:(skinCd)=>(dispatch(documentActions.setSkinCd(skinCd))),
        // updateSkinCd:(skinCd)=>(dispatch(documentActions.updateSkinCd(skinCd)))
        // 3.
        documentActions:bindActionCreators(documentActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GettingStarted)

// {(value == this.state.skinCd? 'selected fa fa-check' :'hide') }


// {(value == this.state.skinCd? 'selected-skin ' :'' ) + "template-card rounded-border"}
