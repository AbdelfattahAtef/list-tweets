import React from "react";
import PropTypes from 'prop-types';
import constants from '../../constants'
import "./_sidebar.sass";

/**
 * Update background color for the body
 * @param color
 */
const updateBackgroundColor = (color, e) => {
    document.body.style.backgroundColor = color;
    const colorsItems = document.getElementsByClassName('sidebar__section--background__item');
    for(let i =0; i < colorsItems.length; i++){
        document.getElementsByClassName('sidebar__section--background__item')[i].style.borderWidth = '1px';
    }
    e.target.style.borderWidth = '3px';
};

/**
 * Update text color for any user text
 * @param color
 */
const updateTextColor = (color, e) => {
    const usersItems = document.getElementsByClassName('tweets__user');
    for(let i =0; i < usersItems.length; i++){
        document.getElementsByClassName('tweets__user')[i].style.color = color;
        document.getElementsByClassName('tweets__user')[i].style.borderColor = color;
    }
    const userDataItems = document.getElementsByClassName('tweets__user-data');
    for(let i =0; i < userDataItems.length; i++){
        document.getElementsByClassName('tweets__user-data')[i].style.borderColor = color;
    }
    const colorsItems = document.getElementsByClassName('sidebar__section--color__item');
    for(let i =0; i < colorsItems.length; i++){
        document.getElementsByClassName('sidebar__section--color__item')[i].style.borderWidth = '1px';
    }
    e.target.style.borderWidth = '3px';
};

/**
 * Update font family for tweets
 * @param fontFamily
 */
const updateTweetsFontFamily = fontFamily => {
    const tweetsList = document.getElementsByClassName('tweets__text');
    for(let i =0; i < tweetsList.length; i++){
        document.getElementsByClassName('tweets__text')[i].style.fontFamily = fontFamily
    }
};

/**
 * Update font size for tweets
 * @param fontSizeVal
 */
const handleFontSizeChange = fontSizeVal => {
    const tweetsList = document.getElementsByClassName('tweets__text');
    for(let i =0; i<tweetsList.length; i++){
        document.getElementsByClassName('tweets__text')[i].style.fontSize = fontSizeVal
    }
};

function Sidebar({toggleSidebar}) {
    return (
        <div className={`sidebar ${toggleSidebar ? 'sidebar--opened' : ''}`}>
            <div className="sidebar__content">
                <React.Fragment>
                    <div className="sidebar__title">
                        Select Background Color
                    </div>
                    <div className="sidebar__section sidebar__section--background">
                        {
                            constants.colors.map(color => (
                                <div
                                    key={`background-${color}`}
                                    className="sidebar__section--background__item"
                                    style={{background: color}}
                                    onClick={(e) => updateBackgroundColor(color, e)}
                                />
                            ))
                        }
                    </div>
                </React.Fragment>
                <React.Fragment>
                    <div className="sidebar__title">
                        Select Text Color
                    </div>
                    <div className="sidebar__section sidebar__section--color">
                        {
                            constants.colors.map(color => (
                                <div
                                    key={`text-${color}`}
                                    className="sidebar__section--color__item"
                                    style={{background: color}}
                                    onClick={(e) => updateTextColor(color, e)}
                                />
                            ))
                        }
                    </div>
                </React.Fragment>
                <React.Fragment>
                    <div className="sidebar__title">
                        Select Font Type
                    </div>
                    <div className="sidebar__section sidebar__section--fontType">
                        {
                            constants.fontTypes.map(fontType => (
                                <button
                                    key={fontType}
                                    onClick={() => updateTweetsFontFamily(fontType)}>
                                    {fontType}
                                </button>
                            ))
                        }
                    </div>
                </React.Fragment>
                <React.Fragment>
                    <div className="sidebar__title">
                        Select Tweets Font Size
                    </div>
                    <div className="sidebar__section">
                        <div className="sidebar__buttons">
                            <select onChange={e => handleFontSizeChange(e.target.value)}>
                                {
                                    constants.tweetsFontSizes.map(fontSize => (
                                        <option
                                            key={fontSize}>
                                            {fontSize}
                                        </option>
                                    ))
                                }
                            </select>

                        </div>
                    </div>
                </React.Fragment>
                <React.Fragment>
                    <div className="sidebar__title">
                        Order Tweets By Date
                    </div>
                    <div className="sidebar__section">
                        <div className="sidebar__buttons">
                            <button>
                                UP
                            </button>
                            <button>
                                DOWN
                            </button>
                        </div>
                    </div>
                </React.Fragment>
                <React.Fragment>
                    <div className="sidebar__title">
                        Number of Tweets
                    </div>
                    <input
                        type="number"
                        className="sidebar__field"
                        min={1}
                    />
                </React.Fragment>
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    toggleSidebar: PropTypes.bool,
};

export default Sidebar;
