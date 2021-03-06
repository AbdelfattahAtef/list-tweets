import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import constants from '../../constants';
import utils from '../../utils';
import 'font-awesome/css/font-awesome.min.css';
import './_tweets.sass';
class Tweets extends Component {
    state = {
        users: constants.users
    };

    componentDidMount(){
        if(localStorage.getItem('view') === 'list' || window.screen.width < 1024){
            utils.handleTweetsView('list')
        }
        else{
            utils.handleTweetsView('grid');
        }
    }

    /**
     * Handle filter users
     * @param e
     */
    handleFilterUsers(e){
        const name = e.target.value;
        if(name){
            this.setState({
                users: this.state.users.filter(user => (
                    user.name.toLowerCase().includes(name.toLowerCase())
                ))
            });
        }else{
            this.setState({
                users: constants.users
            });
            utils.loadTwitterScript();
        }
        utils.handleFontSizeChange();
        utils.updateTweetsFontFamily();
        utils.updateTextColor();
    }

    render() {
        return (
            <div className="tweets">
                <div className="tweets__options">
                    <input
                        type="text"
                        onChange={(e) => this.handleFilterUsers(e)}
                        className="tweets__input"
                        placeholder="Filter by @name"
                    />
                    <div>
                        <button
                            className="tweets__button"
                            onClick={() => utils.handleTweetsView('grid')}>Grid</button>
                        <button
                            className="tweets__button"
                            onClick={() => utils.handleTweetsView('list')}>List</button>
                    </div>
                </div>
                {
                    this.state.users.length > 0 &&
                    <div className="tweets__wrapper">
                        {
                            this.state.users.map(user => (
                                <div className="tweets__user" key={user.name}>
                                    <div className="tweets__user-data">
                                        <img src={user.image}
                                             alt={user.name}
                                             className="tweets__user-image"
                                        />
                                        <h3 className="tweets__user-name">{user.userName}</h3>
                                        <p className="tweets__user-sub-name">{user.name}</p>
                                        <div className="tweets__user-followers">
                                            <div>
                                                <h4 className="tweets__user-followers-label">Tweets</h4>
                                                <p className="tweets__user-followers-text">{user.numOfTweets}</p>
                                            </div>
                                            <div>
                                                <h4 className="tweets__user-followers-label">Following</h4>
                                                <p className="tweets__user-followers-text">{user.numOfFollowing}</p>
                                            </div>
                                            <div>
                                                <h4 className="tweets__user-followers-label">Followers</h4>
                                                <p className="tweets__user-followers-text">{user.numOfFollowers}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        _.range(this.props.tweetsNumber).map((tweetNum, index) => (
                                            <div className="tweets__data" key={`${tweetNum}-Number`}>
                                                <p
                                                    className="tweets__text"
                                                    key={`${user.tweets[index].id}-${user.name}`}
                                                    dangerouslySetInnerHTML={{
                                                        __html: user.tweets[index].text,
                                                    }}/>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                }
                {
                    this.state.users.length === 0 &&
                    <div className="tweets__error">There is no users with this name</div>
                }
            </div>
        );
    }
}

Tweets.propTypes = {
    tweetsNumber: PropTypes.number,
};

export default Tweets;
