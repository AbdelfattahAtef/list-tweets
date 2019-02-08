import React, { Component } from 'react';
import './_home.sass';

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Tweets from "../../components/Tweets";

class Home extends Component {
    state = {
        toggleSidebar: false,
    };

    /**
     * Toggle display of sidebar
     * @param displaySidebar
     */
    toggleSidebar = (displaySidebar) => {
        this.setState({
            toggleSidebar: displaySidebar
        })
    };

    render() {
        return (
            <div className="home-wrapper">
                <Navbar toggleSidebar={this.toggleSidebar}/>
                <Header/>
                <div className="home-wrapper__content">
                    <Sidebar toggleSidebar={this.state.toggleSidebar}/>
                    <Tweets/>
                </div>
            </div>
        );
    }
}

export default Home;
