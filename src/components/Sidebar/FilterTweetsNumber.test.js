import React from 'react';
import FilterTweetsNumber from './FilterTweetsNumber';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<FilterTweetsNumber />', () => {
    it('should render FilterTweetsNumber component', () => {
        const wrapper = shallow(<FilterTweetsNumber />);
        expect(wrapper.find('.sidebar__title').length).toBe(1);
        expect(wrapper.find('.sidebar__title').text()).toBe('Number of Tweets');
        expect(wrapper.find('.sidebar__field').length).toBe(1);
    });
});
