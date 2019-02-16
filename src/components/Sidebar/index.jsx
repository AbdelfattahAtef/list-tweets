import React, { Component } from 'react';
import PropTypes from 'prop-types';
import utils from '../../utils';
import "./_sidebar.sass";
import TweetsBackgroundColor from './TweetsBackgroundColor';
import TweetsColor from './TweetsColor';
import TweetsFontType from './TweetsFontType';
import TweetsFontSize from './TweetsFontSize';
import FilterTweetsNumber from './FilterTweetsNumber';

class Sidebar extends Component {
    componentDidMount() {
        const bodyBackgroundColor = localStorage.getItem('bodyBg');
        const tweetsColor = localStorage.getItem('tweetsColor');
        const fontFamily = localStorage.getItem('fontFamily');
        const fontSize = localStorage.getItem('fontSize');
        if(bodyBackgroundColor) {
            utils.updateBackgroundColor(bodyBackgroundColor);
        }
        if(tweetsColor) {
            utils.updateTextColor(tweetsColor);
        }
        if(fontFamily) {
            utils.updateTweetsFontFamily(fontFamily)
        }
        if(fontSize) {
            utils.handleFontSizeChange(fontSize)
        }
    }
    render(){
        const {toggleSidebar} = this.props;
        return (
            <div className={`sidebar ${toggleSidebar ? 'sidebar--opened' : ''}`}>
                <div className="sidebar__content">
                    <TweetsBackgroundColor/>
                    <TweetsColor/>
                    <TweetsFontType/>
                    <TweetsFontSize/>
                    <FilterTweetsNumber numberOfTweets={this.props.numberOfTweets}/>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    toggleSidebar: PropTypes.bool,
    numberOfTweets: PropTypes.func,
};

export default Sidebar;
