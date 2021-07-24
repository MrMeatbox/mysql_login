import './App.css';


import {BrowserRouter as Router, Route} from 'react-router-dom';
import Registration from "./pages/Registration";
import Login from './pages/Login';
import NormalUser from './components/NormalUser';


function App() {
 
  return (
    <Router>
      <div className="Registration">
        <Route exact path="/registration" component={Registration}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/normaluser" component={NormalUser}/>
      </div>
    </Router>
  );
}

export default App;
