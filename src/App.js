import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import AddService from './pages/AddService/AddService';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Registration from './pages/Login/Registration/Registration';
import AllProduct from './pages/AllProduct/AllProduct';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Switch>

            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/allProducts">
              <AllProduct></AllProduct>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
