import React, { Component } from 'react';
import {connect} from 'react-redux';
import {WITHDRAW_AMT,DEPOSIT_AMT} from "./action"

class Balance extends Component {
    render() {
        return (
            <div className="Balance">
                <div><div className="title">Balance </div><div className="min">
                    <span>MIN BALANCE: &#8377; </span></div></div>

                <div className="dep">AVAILABLE BALANCE : &#8377; {this.props.amt}</div>

                <button >CHECK BALANCE </button>

                
                
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps)=>{
    const amt=state.amt;
    console.log(amt);
    ownProps.amt=amt;
    return {
        amt,
    }

    

}

const mapDispatchToProps = (dispatch, ownProps)=>{

    return{}

}


export default connect(mapStateToProps,mapDispatchToProps)(Balance);
