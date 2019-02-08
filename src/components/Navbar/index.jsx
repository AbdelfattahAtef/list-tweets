import React, {Component} from "react";
import "./_navbar.sass";

class Navbar extends Component {
    state = {
        toggleSidebar: false
    };

    toggleSidebarDisplay = () => {
        this.setState(prevState => ({
            toggleSidebar: !prevState.toggleSidebar
        }), () => (
            this.props.toggleSidebar(this.state.toggleSidebar)
        ));

    };
    render(){
        return (
            <div className="navbar">
                {/*<i className="fa fa-bars" onClick={this.toggleSidebarDisplay}/>*/}
                <button onClick={this.toggleSidebarDisplay}>
                    {this.state.toggleSidebar ? 'Hide Sidebar' : 'Open Sidebar'}
                </button>
            </div>
        );
    }
}

export default Navbar;
