import React from 'react';
import constants from '../../constants';
import utils from '../../utils';

function OrderTweetsByData(){
    return (
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
    );
}

export default OrderTweetsByData;

