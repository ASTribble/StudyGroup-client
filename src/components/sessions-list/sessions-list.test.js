import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import '../setupTests';

import SessionsList from './sessions-list';

describe('<SessionsList />', () => {
  it('Smoke test - renders without crashing', () => {
    shallow(<SessionsList />);
  });
})