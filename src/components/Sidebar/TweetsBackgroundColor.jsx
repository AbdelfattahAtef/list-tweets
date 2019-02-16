import React from 'react';
import constants from '../../constants';
import utils from '../../utils';

function TweetsBackgroundColor(){
    return (
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
                            onClick={(e) => utils.updateBackgroundColor(color, e)}
                        />
                    ))
                }
            </div>
        </React.Fragment>
    );
}

export default TweetsBackgroundColor;

