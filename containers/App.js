import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class App extends Component {
    render () {
        return (
            <ul>
                <li><Link to="/spread1">The “True Love” Spread</Link></li>
                <li><Link to="/spread2">The “Success” Spread</Link></li>
                <li><Link to="/spread3">The “Celtic Cross” Spread</Link></li>
                <li><Link to="/spread4">The “Spiritual Guidance” Spread</Link></li>
                <li><Link to="/spread5">The “Career Path” Spread</Link></li>
                <li><Link to="/spread6">The “Three Card” Spread</Link></li>
            </ul>
        );
    }
}