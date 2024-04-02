/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

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
      <Link to="/">Home</Link>
    </div>
  );
}

export default Credits;
