
import './App.scss';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import Create from './components/pages/Create';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from './components/pages/List';
import Update from './components/pages/Update';
function App() {
  return (
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/list" component={List}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/register" component={Register}></Route>
                  <Route exact path="/add-user" component={Create}></Route>
                  <Route exact path="/update/:id" render={(props) => <Update {...props}/>}></Route>
              </Switch>
          </BrowserRouter>
  );
}

export default App;
