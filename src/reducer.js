
const reducer = (state, action) => {

    if (state === undefined) {
      return {
        amt: 5000,
      };
    }

    
    


    switch (action.type) {
        case "WITHDRAW_AMT":
            let new_amt=action.payload;
            console.log(new_amt)
            if(new_amt> state.amt){
                alert("min balance si 5000 we cannot dedcut");
            }
            // console.log(new_amt);

            else{
                state.amt=state.amt-new_amt;

            }
            

          
          break;

        case "DEPOSIT_AMT":

            let namt=action.payload;
            // console.log(new_amt)
           

            
                state.amt=state.amt+namt;

            
            


            break;

    
        default:
          break;
      }
      console.log(state.amt);
    
      return { ...state };

};

export default reducer;