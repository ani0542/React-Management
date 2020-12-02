import React from 'react'
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";



import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
  } from "react-router-dom";




import Navbar from './Components/layout/Navbar';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import NotFound from './Components/pages/NotFound';
import AddUser from './Components/users/AddUser';
import EditUser from './Components/users/EditUser';
import User from './Components/users/User';





function App() {
    return (
        <div>
             <Router>
                 <Navbar/>
                 <Switch>
                         <Route exact path='/' component={Home}/>
                         <Route exact path='/about' component={About}/>
                         <Route exact path='/contact' component={Contact}/>
                         {/* <Route exact path='/users/add:id?' component={AddUser}/> */}
                         <Route exact path='/users/add' component={AddUser}/>
                         <Route exact path='/users/edit/:id' component={EditUser}/>
                         <Route exact path='/users/:id' component={User}/>
                         <Route  component={NotFound}/>

                 </Switch>
             </Router>
        </div>
    )
}

export default App
