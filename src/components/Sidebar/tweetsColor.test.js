import React from 'react';
import TweetsColor from './TweetsColor';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<TweetsColor />', () => {
    it('should render TweetsColor component', () => {
        const wrapper = shallow(<TweetsColor />);
        expect(wrapper.find('.sidebar__title').length).toBe(1);
        expect(wrapper.find('.sidebar__title').text()).toBe('Select Text Color');
        expect(wrapper.find('.sidebar__section').length).toBe(1);
        expect(wrapper.find('.sidebar__section--color__item').length).toBe(15);
    });
});
