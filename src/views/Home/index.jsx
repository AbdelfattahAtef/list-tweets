import React, { Component } from 'react';
import utils from '../../utils'
import './_home.sass';

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Tweets from "../../components/Tweets";
import Loader from "../../components/Loader";
class Home extends Component {
    state = {
        toggleSidebar: false,
        tweetsNumber: 10,
        showLoader: false,
    };

    componentDidMount(){
        this.setState({ showLoader: true });
        setTimeout(() => {
            this.setState({ showLoader: false });
        }, 3000)
    }

    /**
     * Toggle display of sidebar
     * @param displaySidebar
     */
    toggleSidebar = (displaySidebar) => {
        this.setState({
            toggleSidebar: displaySidebar
        });
    };

    /**
     *
     * @param value
     * @return {boolean}
     */
    changeNumberOfTweets = (value) => {
        this.setState({
            tweetsNumber: value && value <= 10 ? value : 10,
        });
        utils.loadTwitterScript();
    };

    render() {
        return (
            <React.Fragment>
                <div className="home-wrapper">
                    <Navbar toggleSidebar={this.toggleSidebar}/>
                    <Header/>
                    <div className="home-wrapper__content">
                        <Sidebar
                            toggleSidebar={this.state.toggleSidebar}
                            numberOfTweets={this.changeNumberOfTweets}/>
                        <Tweets tweetsNumber={this.state.tweetsNumber}/>
                    </div>
                </div>

                {this.state.showLoader && <Loader />}
            </React.Fragment>
        );
    }
}

export default Home;
