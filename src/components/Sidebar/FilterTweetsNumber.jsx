import React from 'react';
import PropTypes from 'prop-types';

function FilterTweetsNumber({numberOfTweets}){
    return (
        <React.Fragment>
            <div className="sidebar__title">
                Number of Tweets
            </div>
            <input
                type="number"
                className="sidebar__field"
                min={1}
                max={10}
                onChange={(e) => numberOfTweets(e.target.value)}
            />
        </React.Fragment>
    );
}

FilterTweetsNumber.propTypes = {
    numberOfTweets: PropTypes.func,
};

export default FilterTweetsNumber;

