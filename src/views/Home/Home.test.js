import React from 'react';
import Home from '../Home';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
    it('should render Home component', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('.home-wrapper').length).toBe(1);
        expect(wrapper.find('.home-wrapper__content').length).toBe(1);
    });

    it('calls componentDidMount', () => {
        jest.spyOn(Home.prototype, 'componentDidMount');
        const wrapper = shallow(<Home />);
        expect(Home.prototype.componentDidMount.mock.calls.length).toBe(1)
    });

    it('matches the snapshot', () => {
        const tree = shallow(<Home />);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
