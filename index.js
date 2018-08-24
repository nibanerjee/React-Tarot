import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './containers/App';
import Spread1 from './containers/Spread1';
import Spread2 from './containers/Spread2';
import Spread3 from './containers/Spread3';
import Spread4 from './containers/Spread4';
import Spread5 from './containers/Spread5';
import Spread6 from './containers/Spread6';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/Spread1" component={Spread1}/>
            <Route path="/Spread2" component={Spread2}/>
            <Route path="/Spread3" component={Spread3}/>
            <Route path="/Spread4" component={Spread4}/>
            <Route path="/Spread5" component={Spread5}/>
            <Route path="/Spread6" component={Spread6}/>
        </Switch>
    </BrowserRouter>), document.getElementById('app'))