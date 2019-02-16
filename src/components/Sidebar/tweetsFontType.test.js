import React from 'react';
import TweetsFontType from './TweetsFontType';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<TweetsFontType />', () => {
    it('should render TweetsFontType component', () => {
        const wrapper = shallow(<TweetsFontType />);
        expect(wrapper.find('.sidebar__title').length).toBe(1);
        expect(wrapper.find('.sidebar__title').text()).toBe('Select Font Type');
        expect(wrapper.find('.sidebar__section').length).toBe(1);
    });
});
