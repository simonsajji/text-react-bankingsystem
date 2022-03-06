import logo from './logo.svg';
import './App.css';
import "./index.css"
import Balance from "./Balance.js"
import Deposit from "./Deposit.js"
import Withdraw from "./Withdraw.js"


function App() {
  return (
    <div className="App">

      <Balance />
      <div className="wrapper">
       
        <Withdraw />
        <Deposit />


      </div>
      


    </div>
  );
}

export default App;
