import React, { Component } from 'react';
import './_tweets.sass';
import constants from '../../constants'
class Tweets extends Component {
    render() {
        return (
            <div className="tweets-wrapper">
                {
                    constants.users.map(user => (
                        <div className="tweets-wrapper__user" key={user.name}>
                            <div className="tweets-wrapper__user-data">
                                <img src={user.image}
                                     alt={user.name}
                                     className="tweets-wrapper__user-image"
                                />
                                <h3 className="tweets-wrapper__user-name">{user.userName}</h3>
                                <p className="tweets-wrapper__user-sub-name">{user.name}</p>
                                <div className="tweets-wrapper__user-followers">
                                    <div>
                                        <h4 className="tweets-wrapper__user-followers-label">Tweets</h4>
                                        <p className="tweets-wrapper__user-followers-text">{user.numOfTweets}</p>
                                    </div>
                                    <div>
                                        <h4 className="tweets-wrapper__user-followers-label">Following</h4>
                                        <p className="tweets-wrapper__user-followers-text">{user.numOfFollowing}</p>
                                    </div>
                                    <div>
                                        <h4 className="tweets-wrapper__user-followers-label">Followers</h4>
                                        <p className="tweets-wrapper__user-followers-text">{user.numOfFollowers}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="tweets-wrapper__text">
                                You can always edit a bad page. You can’t edit a blank page.
                            </p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Tweets;
