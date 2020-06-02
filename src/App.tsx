import React,{ Component} from 'react';
import {
    Route,
    HashRouter as Router,
} from "react-router-dom";
/* import Login from './auth/containers/login.js'; */
import Signin from './auth/containers/signin.js';
import Signup from './auth/containers/signup.js';
import Dashboard from './dashboard/containers/dashboard.js';
import PartnerApps from './dashboard/containers/partnerApps.js';
import History from './history/containers/history.js';
import { firebaseConfig } from './config/firebaseconfig.js'

var firebase = require("firebase/app")

//Initialize firebase
firebase.initializeApp(firebaseConfig)

class App extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Signin}/>
                    {/* <Route exact path="/login" component={Login}/> */}
                    <Route exact path="/signin" component={Signin}/>
                    {/*<Route exact path="/signup" component={Signup}/>*/}
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/partnerApp" component={PartnerApps}/>
                    <Route exact path="/history" component={History}/>
                </div>
            </Router>
        );
    }
}
export default App;
