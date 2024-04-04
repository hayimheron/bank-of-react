/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';




  // Create Credit list
const Credits = (props) => {
  const { credits, balance, updateAccountBalance } = props;
  let newBalance = 0;

  const roundToTwoDecimalPlaces = (value) => {
    return Math.round(value * 100) / 100;
  }; 


// **Create the list of Credit items** 
const submissionCredit = (event) => {
  // Prevent default form submission behavior (page reload)
  event.preventDefault();

  // Calculate the new balance by adding the entered credit amount
  newBalance = roundToTwoDecimalPlaces(balance + parseFloat(event.target.amount.value));

  // Create a new credit object with a unique ID, description, formatted amount, and current date
  const newCredit = {
    id: credits.length + 1, // Assign a simple incremental ID
    description: event.target.description.value, // Get description from form input
    amount: parseFloat(event.target.amount.value).toFixed(2), // Ensure amount has two decimal places
    date: new Date().toISOString() // Record the current timestamp
  };

  // Update the overall account balance
  updateAccountBalance(newBalance); 

  // Add the new credit transaction to the list using the provided props function
  props.addCredit(newCredit); 

  // Reset the form for the next entry
  event.target.reset(); 
};
  

let creditsView = () => {
  return credits.map((credits) => { 
    let date = credits.date.slice(0, 10);
    return <li key={credits.id}>{credits.amount} {credits.description} {date}</li>
  });
}

  return (
    <div>
      <h1>Credits</h1>
      {creditsView()}
      <br/>

      <form onSubmit={submissionCredit}>
        <input type="text" name="description" required/>
        <input type="number" step="any" name="amount" required/>
        <button type="submit">Add Credit</button>
      </form>
      <AccountBalance accountBalance={balance} />
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;
