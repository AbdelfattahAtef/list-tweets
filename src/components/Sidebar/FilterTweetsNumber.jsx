import React from 'react';
import constants from '../../constants';
import utils from '../../utils';

function FilterTweetsNumber(){
    return (
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
    );
}

export default FilterTweetsNumber;

