import React from 'react';
import { shallow } from 'enzyme';

import SomeComponent from '../../components/SomeComponent';

describe('SomeComponent component', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <SomeComponent />
    );
  });

  test('should do something', () => {

  });
});
