import React from 'react';
import Navbar from '../Navbar';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<Navbar />', () => {
    it('should render Navbar component', () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper.find('.fa-bars').length).toBe(1);
        expect(wrapper.find('.fa-close').length).toBe(0);
        wrapper.setState({toggleSidebar: true});
        expect(wrapper.find('.fa-bars').length).toBe(0);
        expect(wrapper.find('.fa-close').length).toBe(1);
    });
    it('matches the snapshot', () => {
        const tree = shallow(<Navbar />);
        expect(toJson(tree)).toMatchSnapshot();
    })
});
