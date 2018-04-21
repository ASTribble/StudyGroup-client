import React from 'react';
import { shallow } from 'enzyme';

import HomeNav from './home-nav';


describe('<HomeNav />', () => {
  it('Smoke test - renders without crashing', () => {
    shallow(<HomeNav />);
  });
});