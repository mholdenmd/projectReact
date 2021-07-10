import { Router, Link } from '@reach/router';
import AllUsers from './components/AllUsers';
import OneUser from './components/OneUser';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div className="App">
      <Router>
        <AllUsers path="/"></AllUsers>
        <OneUser path="/User/:_id"></OneUser>
        <UpdateUser path="/User/update/:_id"></UpdateUser>
        <CreateUser path="/User/create"></CreateUser>
      </Router>
    </div>
  );
}

export default App;
