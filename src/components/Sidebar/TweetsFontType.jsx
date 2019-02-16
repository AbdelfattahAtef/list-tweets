import React from 'react';
import constants from '../../constants';
import utils from '../../utils';

function TweetsFontType(){
    return (
        <React.Fragment>
            <div className="sidebar__title">
                Select Font Type
            </div>
            <div className="sidebar__section sidebar__section--fontType">
                {
                    constants.fontTypes.map(fontType => (
                        <button
                            key={fontType}
                            onClick={() => utils.updateTweetsFontFamily(fontType)}>
                            {fontType}
                        </button>
                    ))
                }
            </div>
        </React.Fragment>
    );
}

export default TweetsFontType;

