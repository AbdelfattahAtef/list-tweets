import React, {Component} from "react";
import 'font-awesome/css/font-awesome.min.css';
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
                <button onClick={this.toggleSidebarDisplay}>
                    <i className={this.state.toggleSidebar ? 'fa fa-close' : 'fa fa-bars'}/>
                </button>
            </div>
        );
    }
}

export default Navbar;
