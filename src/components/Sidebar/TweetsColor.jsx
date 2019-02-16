import React from 'react';
import constants from '../../constants';
import utils from '../../utils';

function TweetsColor(){
    return (

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
                            onClick={(e) => utils.updateTextColor(color, e)}
                        />
                    ))
                }
            </div>
        </React.Fragment>
    );
}

export default TweetsColor;

