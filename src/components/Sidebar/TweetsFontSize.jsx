import React, {Component} from 'react';
import constants from '../../constants';
import utils from '../../utils';

class TweetsFontSize extends Component{
    state = {
        fontSize: undefined,
    };
    /**
     * Handle Font Size
     * @param fontSizeValue
     */
    handleFontSize(fontSizeValue){
        utils.handleFontSizeChange(fontSizeValue);
        this.setState({
            fontSize: fontSizeValue,
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="sidebar__title">
                    Select Tweets Font Size
                </div>
                <div className="sidebar__section">
                    <div className="sidebar__buttons">
                        <select
                            onChange={e => this.handleFontSize(e.target.value)}
                            value={localStorage.getItem('fontSize') || this.state.fontSize}>
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
        );
    }
}

export default TweetsFontSize;

