import React, { Component } from 'react';
import {connect} from 'react-redux';
import {WITHDRAW_AMT,DEPOSIT_AMT} from "./action"

class Withdraw extends Component {

    constructor(props) {
        super(props);
        this.state = {
          childAmt: 0,
        };

        this.inputRef=React.createRef();
      }

    
    render() {
        
        return (
            <div className="Withdraw">
                <div className="title"> Withdraw </div>

                <div>
                    <input type="number"  ref={this.inputRef} placeholder="Enter the amt to be withdrawn"/>  <div> 
                    
                    <button onClick={()=>this.props.deleteAmt(this.inputRef.current.value)}> WITHDRAW </button></div> </div>
                
                <div className="amt">Current Withdrawn : <span> &#8377; 1000</span> </div>
                <div className='amt'>Total Withdrawn : <span> &#8377; 1000</span> </div>
                
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps)=>{
    return {}

    

}

const mapDispatchToProps = (dispatch, ownProps)=>{

    const delAmt = (newAmt) =>{
        let amt=parseInt(newAmt);
        console.log(amt)
        dispatch(WITHDRAW_AMT(amt)); ///updating the state of redux store
    }

    return{
        deleteAmt:delAmt,
       
    }




}

export default connect(mapStateToProps,mapDispatchToProps)(Withdraw);


