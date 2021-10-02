import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Create from './Components/Create';
import Lobby from './Components/Lobby';
import Edit from './Components/Edit';

const App = () => {

  return (
    <Router>
        <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Notes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <Link className="navbar-brand"  to="/" >Inicio</Link>
              {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/creacion">Creación</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/edicion">Edición</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <Switch>  
        <Route path="/creacion">
          <Create/>
        </Route>
        <Route path='/' exact>
          <Lobby/>
        </Route> 
        <Route path='/edicion'>
          <Edit/>
        </Route>
      </Switch>
        
    </Router>
  );
}

export default App;
