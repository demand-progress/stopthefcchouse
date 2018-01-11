import React, { Component } from 'react';
import Form from './Form.jsx';

class Main extends Component {

    render() {
        return (<div className="unit">
            <div className="hero" id="bftn-action-form">
                <div className="">
                    <div>
                        <Form />
                    </div>

                </div>
                <div className="unit">
                    <p style={{color: 'white', textAlign: 'center'}}>
                        <h4>Here's the language that will be sent to Congress:</h4>
                    </p>
                    <p style={{color: 'white', textAlign: 'center'}}>
                      <i>
                        "As your constituent, I urge you to cosponsor the Congressional Review Act (CRA) ‘resolution of disapproval’ to reverse the FCC’s repeal of net neutrality.                       
                         <br/><br/>
                        "The FCC order allowing internet providers to slow down and block content at their choosing leaves the public without protections from corporate censorship, and leaves small businesses without the ability to compete with larger sites and services. The effects on free expression and innovation will be devastating.                       
                        <br/><br/>
                        “Unless it is stopped, the FCC’s anti-net neutrality order will go down as a historically bad decision negatively impacting millions of Americans who rely on the internet for work, education, news, entertainment, and so much more. Now is the time to stand up against this plan to destroy net neutrality. Stand with your constituents, not Comcast.                      
                        <br/><br/>
                        "Please cosponsor the CRA resolutions from Senator Ed Markey and Representative Mike Doyle to stop the repeal of net neutrality"
                      </i>
                    </p>
                    <hr/>
                    <p style={{ textAlign: 'center' }}>
                        On December 14th, three FCC commissioners ignored the will of the public and voted to gut net neutrality protections — despite polling showing that 83% of Americans opposed the repeal.                       
                        <br/><br/>
                        We still have a chance to stop the FCC, though. Net neutrality champion Senator Ed Markey is leading the charge in the Senate with a resolution that will overrule the FCC. A companion resolution from Representative Mike Doyle will be introduced in the House.                        
                        <br/><br/>
                        As the oversight body for the FCC, Congress can overturn this massive and illegitimate giveaway to the telecom industry. Since the FCC voted to end net neutrality, over 40 senators have already pledged to reverse the FCC's order — <strong>and 30 is the magic number needed to guarantee a floor vote. </strong>
                        <br/><br/>
                        When the resolution goes to the floor, we need a simple majority (51 senators) to pass it. Republican Senator Susan Collins has already pledged her support for the resolution, and if a handful of remaining Democrats join, we’ll need just one more Republican to get this passed in the Senate!
                        <br/><br/>
                        If we flood Congress with petitions and calls, we have a shot at stopping the FCC order. <a className="back-to-form-link" href="#signThePetition">Sign the petition and call on Congress to pass the CRA resolution to stop the repeal of net neutrality.</a>
                        <br/><br/>
                        <strong>And remember what we’re fighting for:</strong> Without net neutrality, the Internet will look more like cable TV, where the content we see is controlled by corporations like Comcast and Verizon. We can’t afford to see the open internet—a revolutionary medium where the exchange of ideas, democratic participation and the ability to organize, especially among marginalized communities, has flourished—fall to the control of corporate gatekeepers.
                    </p>

                </div>
            </div>
        </div>);
    }
}

export default Main;