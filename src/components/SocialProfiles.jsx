import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

class SocialProfile extends Component{
    render(){
        const{link, image} = this.props.profile;

        return(
            <div style={{display: 'inline-block', width:100, margin: 10}}>
                <a href={link}><img src={image} alt='profile' style={{width:35, height:35}}/></a>
            </div>
        )
    }
}

class SocialProfiles extends Component{
    render(){
        return (
            <div>
                <h4>Connect with me</h4>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return (
                                <SocialProfile key={SOCIAL_PROFILE.id} profile={SOCIAL_PROFILE}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;