import React, { Component } from 'react';
import {connect} from 'react-redux';
import {WITHDRAW_AMT,DEPOSIT_AMT} from "./action"

class Deposit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          childAmt: 0,
        };

        this.inputRef=React.createRef();
      }



    render() {
        return (
            <div className="Deposit">
                <div className="title"> Deposit </div>

                <div><input type="number" ref={this.inputRef} placeholder="Enter the amt to be withdrawn"/>  <div> 
                <button onClick={()=>this.props.insertAmt(this.inputRef.current.value)}> DEPOSIT </button></div> </div>

                <div className="amt">Current Deposit : <span> &#8377; 1000</span> </div>
                <div className='amt'>Total Deposited : <span> &#8377; 1000</span> </div>
                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{

    const addAmt = (newAmt) =>{
        let amt=parseInt(newAmt);
        console.log(amt)
        dispatch(DEPOSIT_AMT(amt));
    }

    return{
        insertAmt:addAmt,
    }




}

export default connect(null,mapDispatchToProps)(Deposit);