import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { AuthProvider } from "./config/Auth";
import PrivateRoute from "./config/PrivateRoute";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Portfolio from './pages/Portifolio';
import Contatos from './components/Contatos';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <div className="app-container">
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/reset-password' component={ResetPassword} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contatos' component={Contatos} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
    </AuthProvider>    
  );
}

export default App;
