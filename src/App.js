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
import Products from './pages/Products/Products/Products';
import Purchase from './pages/Home/Home/Purchase/Purchase';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Orders from './pages/Home/Orders/Orders';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

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
            <Route path="/orders">
              <Orders></Orders>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
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
