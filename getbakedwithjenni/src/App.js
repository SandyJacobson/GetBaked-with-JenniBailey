import logo from './logo.svg';
import './App.css';
import { Switch, Router } from 'react-router-dom'
import Layout from './components/shared/Layout/Layout'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/" />
        <Route exact path ="/admin" />
        <Route exact path ="/login" />
        <Route exact path ="/customer" />
        <Route exact path ="/goods" />
      </Switch>
    </div>
  );
}

export default App;
