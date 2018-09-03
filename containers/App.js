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
                        <div class="card">
                            <div class="front">
                                <span>The “True Love” Spread</span>
                                <div class="flip-icon-holder" onClick={this.flipCards}></div>
                            </div>
                            <div class="back">
                                <div class="flip-icon-holder" onClick={this.flipCards}></div>
                                <div class="short-desc">
                                    <span>It should come as no surprise that this is one of the spreads on this list. Everyone likes to know where their love lives are going, what will happen to their romantic relationships, and if they will be happy. This spread is very useful to evaluate your physical, emotional, mental and spiritual connections with your partner. <Link to="/spread1">Click here for details</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm card-col">
                        <div class="card">
                            <div class="front">
                                <span>The “Success” Spread</span>
                                <div class="flip-icon-holder" onClick={this.flipCards}></div>
                            </div>
                            <div class="back">
                                <div class="flip-icon-holder" onClick={this.flipCards}></div>
                                <div class="short-desc">
                                    <span>The success spread an excellent situational spread to use when you are facing an obstacle or challenge and do not know how to approach it. This spread helps you to better understand the true nature of the obstacle you face, as well as helping you to identify what skills and resources you have at your disposal to not just face, but overcome these obstacles! <Link to="/spread2">Click here for details</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm card-col">
                        <div class="card">
                            <div class="front">
                                <span>The “Celtic Cross” Spread</span>
                                <div class="flip-icon-holder" onClick={this.flipCards}></div>
                            </div>
                            <div class="back">
                                <div class="flip-icon-holder" onClick={this.flipCards}></div>
                                <div class="short-desc">
                                    <span>Despite it’s complexity, the “Celtic Cross” is a spread that has been in used for many ages. And in it’s complexity, lays its charm. I find this spread to be the most helpful in complicated situations, because it’s versatile and it’s positions deliver vast amount of information that can be read in several ways depending on the combinations. It points to issues that are of the client’s own making, but also shows what outside influences are at play. <Link to="/spread3">Click here for details</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm card-col">
                        <div class="card">
                            <div class="front">
                                <span>The “Spiritual Guidance” Spread</span>
                                <div class="flip-icon-holder" onClick={this.flipCards}></div>
                            </div>
                            <div class="back">
                                <div class="flip-icon-holder" onClick={this.flipCards}></div>
                                <div class="short-desc">
                                    <span>Similar to the Success Spread, the Spiritual Guidance spread is used situationally during times when you are faced with obstacles or challenges of a spiritual nature, usually related to your own growth or development. This spread is designed to give you a broader perspective, and includes information to help you along your spiritual path and important life lessons. <Link to="/spread4">Click here for details</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm card-col">
                        <div class="card">
                            <div class="front">
                                <span>The “Career Path” Spread</span>
                                <div class="flip-icon-holder" onClick={this.flipCards}></div>
                            </div>
                            <div class="back">
                                <div class="flip-icon-holder" onClick={this.flipCards}></div>
                                <div class="short-desc">
                                    <span>If you are an employee who feels like you have remained stagnant, stuck in a rut for years, vying to be promoted, but to no gain, this spread is for you.It is a great spread that will help you to understand any obstacles you may be facing in your professional life, and suggeststrategies to on how to deal with these issue. <Link to="/spread5">Click here for details</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm card-col">
                        <div class="card">
                            <div class="front">
                                <span>The “Three Card” Spread</span>
                                <div class="flip-icon-holder" onClick={this.flipCards}></div>
                            </div>
                            <div class="back">
                                <div class="flip-icon-holder" onClick={this.flipCards}></div>
                                <div class="short-desc">
                                    <span>This spread is one the quickest way to get answers to any questions you may have in your life, and it can even provide you with insight and guidance if you are simply feel lost and confused.It is by far one of the most dynamic spreads, and is incredibly effective at highlighting the energy of your past, present and future. <Link to="/spread6">Click here for details</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    flipCards = (event) => {
        event.preventDefault();
        $(event.target).parents(".card").toggleClass('flipped');
    }
}