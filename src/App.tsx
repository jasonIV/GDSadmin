import React,{ Component} from 'react';
import {
    Route,
    HashRouter as Router,
} from "react-router-dom";
import Signin from './auth/containers/signin.js';
import Dashboard from './dashboard/containers/dashboard.js';
import History from './history/containers/history.js';

class App extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Signin}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/history" component={History}/>
                </div>
            </Router>
        );
    }
}
export default App;
