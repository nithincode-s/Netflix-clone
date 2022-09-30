import Home from './components/Home/Home';
import styled from 'styled-components';
import MovieDetails from './components/Home/MovieDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Plan from './components/Plan/Plan';

function App() {

  return (
    <app>
      <Router>
        <Switch>
        <Route exact path= "/login" component={Login}/>
        <Route exact path= "/" component={Home}/>
        <Route exact path="/details" component={MovieDetails}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/plan" component={Plan}/>
        
        </Switch>
      </Router>
      
      
    </app>
  );
}

export default App;
const app = styled.div`
  display: flex;
  flex-direction: column;
  color:white;
`;