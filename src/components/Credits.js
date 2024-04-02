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
