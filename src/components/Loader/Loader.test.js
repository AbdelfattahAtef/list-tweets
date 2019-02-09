import React from 'react';
import Loader from '../Loader';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<Loader />', () => {
    it('should render Loader component', () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper.find('div').length).toBe(3);
        expect(wrapper.find('.loader').length).toBe(1);
        expect(wrapper.find('.loader__message').text()).toBe('Loading...');
    });
    it('matches the snapshot', () => {
        const tree = shallow(<Loader />);
        expect(toJson(tree)).toMatchSnapshot();
    })
});