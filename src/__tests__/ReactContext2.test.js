import React from 'react';
import { shallow } from 'enzyme';

const MyContext = React.createContext('');

const MyComponent = () => {
  const myContext = React.useContext(MyContext);
  return <div>{myContext}</div>;
};

test('context should be passed via wrappingComponent', () => {
  const wrapper = shallow(
    <MyContext.Provider value="some context">
      <MyComponent />
    </MyContext.Provider>
  ).dive();
  expect(wrapper).toMatchInlineSnapshot(`
    <div>
      some context
    </div>
  `);
});
