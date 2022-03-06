const WITHDRAW_AMT = (payload) =>{

    return {
        type:"WITHDRAW_AMT",
        payload:payload,
    }
}
const DEPOSIT_AMT =(payload) =>{

    return {
        type:"DEPOSIT_AMT",
        payload:payload,
    }
}


export {WITHDRAW_AMT,DEPOSIT_AMT}