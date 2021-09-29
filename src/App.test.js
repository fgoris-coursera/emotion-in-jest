import { shallow } from "enzyme";
import App from './App';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  const link = wrapper.find('a');
  expect(link).toHaveLength(1);
  expect(link.text()).toEqual(expect.stringMatching(/learn react/i));
});
