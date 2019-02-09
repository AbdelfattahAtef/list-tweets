import React from 'react';
import Header from '../Header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
    it('should render Header component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div').length).toBe(1);
    });
    it('matches the snapshot', () => {
        const tree = shallow(<Header />);
        expect(toJson(tree)).toMatchSnapshot();
    })
});