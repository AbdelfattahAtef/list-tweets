import React, { Component } from 'react';
import './_tweets.sass';
import constants from '../../constants'
class Tweets extends Component {
    state={
        users: constants.users
    };

    /**
     * Handle change tweets view
     * @param type
     */
    handleChangeTweetsView(type){
        if(type === 'list'){
            document.getElementsByClassName('tweets__wrapper')[0].style.flexDirection = 'column';
            const users = document.getElementsByClassName('tweets__user');
            for(let i = 0; i < users.length; i++){
                document.getElementsByClassName('tweets__user')[i].style.width = 'calc(100% - 40px)';
                document.getElementsByClassName('tweets__user')[i].style.marginBottom = '15px';
                document.getElementsByClassName('tweets__user-followers')[i].style.justifyContent = 'center';
            }
        }else{
            document.getElementsByClassName('tweets__wrapper')[0].style.flexDirection = 'row';
            const users = document.getElementsByClassName('tweets__user');
            for(let i = 0; i < users.length; i++){
                document.getElementsByClassName('tweets__user')[i].style.width = 'calc(30% - 40px)';
                document.getElementsByClassName('tweets__user')[i].style.marginBottom = '0px';
                document.getElementsByClassName('tweets__user-followers')[i].style.justifyContent = 'space-between';
            }
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
            })
        }
    }
    render() {
        return (
            <div className="tweets">
                <div className="tweets__options">
                    <input
                        type="text"
                        onChange={(e) => this.handleFilterUsers(e)}
                        className="tweets__input"
                        placeholder="Filter by user name"
                    />
                    <div>
                        <button
                            className="tweets__button"
                            onClick={() => this.handleChangeTweetsView('grid')}>Grid</button>
                        <button
                            className="tweets__button"
                            onClick={() => this.handleChangeTweetsView('list')}>List</button>
                    </div>
                </div>
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
                                <p className="tweets__text">
                                    You can always edit a bad page. You can’t edit a blank page.
                                </p>
                            </div>
                        ))
                    }
                </div>
                {
                    this.state.users.length === 0 &&
                    <div className="tweets__error">There is no users with this name</div>
                }
            </div>
        );
    }
}

export default Tweets;
