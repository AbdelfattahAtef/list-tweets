import React from 'react';
import TweetsBackgroundColor from './TweetsBackgroundColor';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<TweetsBackgroundColor />', () => {
    it('should render TweetsBackgroundColor component', () => {
        const wrapper = shallow(<TweetsBackgroundColor />);
        expect(wrapper.find('.sidebar__title').length).toBe(1);
        expect(wrapper.find('.sidebar__title').text()).toBe('Select Background Color');
        expect(wrapper.find('.sidebar__section--background__item').length).toBe(15);
    });
});
