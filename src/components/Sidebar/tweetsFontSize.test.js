import React from 'react';
import TweetsFontSize from './TweetsFontSize';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<TweetsFontSize />', () => {
    it('should render TweetsFontSize component', () => {
        const wrapper = shallow(<TweetsFontSize />);
        expect(wrapper.find('.sidebar__title').length).toBe(1);
        expect(wrapper.find('.sidebar__title').text()).toBe('Select Tweets Font Size');
        expect(wrapper.find('.sidebar__section').length).toBe(1);
        expect(wrapper.find('.sidebar__buttons').length).toBe(1);
        expect(wrapper.find('.sidebar__buttons option').length).toBe(3);
    });
});
