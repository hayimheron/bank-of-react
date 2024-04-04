/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';


const Debits = (props) => {
  const { debits, balance, updateAccountBalance } = props;
  // Initialize list balance
  let newBalance = 0;

  
}

  let debitsView = () => {
    return debits.map((debits) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = debits.date.slice(0, 10);
      return <li key={debits.id}>{debits.amount} {debits.description} {date}</li>
    });
  }

const Credits = (props) => {
  return (
    <div>
      <h1>Credits</h1>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;
