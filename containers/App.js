import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/app.less';
import $ from 'jquery';
export default class App extends Component {
    render () {
        return (
            <div class="container tarot-app-container">
                <div class="row">
                    <div class="col-sm card-col">
                        <div class="card" onClick={this.flipCards}>
                            <div class="front">The “True Love” Spread</div>
                            <div class="back">
                                <div class="short-desc">
                                    <span>It should come as no surprise that this is one of the spreads on this list. Everyone likes to know where their love lives are going, what will happen to their romantic relationships, and if they will be happy. This spread is very useful to evaluate your physical, emotional, mental and spiritual connections with your partner. <Link to="/spread1">Click here for details</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm card-col">
                        <div class="card" onClick={this.flipCards}>
                            <div class="front">The “Success” Spread</div>
                            <div class="back"><Link to="/spread2">Details</Link></div>
                        </div>
                    </div>
                    <div class="col-sm card-col">
                        <div class="card" onClick={this.flipCards}>
                            <div class="front">The “Celtic Cross” Spread</div>
                            <div class="back"><Link to="/spread3">Details</Link></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm card-col">
                        <div class="card" onClick={this.flipCards}>
                            <div class="front">The “Spiritual Guidance” Spread</div>
                            <div class="back"><Link to="/spread4">Details</Link></div>
                        </div>
                    </div>
                    <div class="col-sm card-col">
                        <div class="card" onClick={this.flipCards}>
                            <div class="front">The “Career Path” Spread</div>
                            <div class="back">
                                <Link to="/spread5">Details</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm card-col">
                        <div class="card" onClick={this.flipCards}>
                            <div class="front">The “Three Card” Spread</div>
                            <div class="back"><Link to="/spread6">Details</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    flipCards = (event) => {
        event.preventDefault();
        $(event.target.parentNode).toggleClass('flipped');
    }
}