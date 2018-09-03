import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import '../styles/spread1.less';
export default class Spread1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            showCardFormation : false
        };
        this.makeCardFormation = this.makeCardFormation.bind(this);
    }
    makeCardFormation(){
        this.setState({
            showCardFormation:true
        })
    }
    render () {
        return (
            <div class="container spread1-container">
                    <div class="row shuffle-spread-row">
                        <div class="spread-container col-sm spread-col">
                            <div class="row">
                                <div class="col-sm-4 shuffled-card">
                                    <span class="card-no">1</span>
                                    <span class="card-desc">This card represents you. It signifies what you currently feel about your relationship, your approach, and your outlook.</span>
                                </div>
                                <div class="col-sm-4 shuffled-card">
                                    <span class="card-no">2</span>
                                    <span class="card-desc">The second card represent your partner. It also represents his current emotions towards you, his attitude, and expectations about your relationship.</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm shuffled-card">
                                    <span class="card-no">3</span>
                                    <span class="card-desc">This is a connection card. What are the characteristics that you have in common binding you together?</span>
                                </div>
                                <div class="col-sm shuffled-card">
                                    <span class="card-no">4</span>
                                    <span class="card-desc">This indicates the strength of your relationship. What are the qualities that keep your relationship?</span>
                                </div>
                                <div class="col-sm shuffled-card">
                                    <span class="card-no">5</span>
                                    <span class="card-desc">This denotes the weakness of your relationship. What are the things you both need to improve?</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4 shuffled-card">
                                    <span class="card-no">6</span>
                                    <span class="card-desc">This final card is your true love card. It interprets what needs to be addressed. Is your relationship going to be successful? If there is a threat, what must be done?</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}