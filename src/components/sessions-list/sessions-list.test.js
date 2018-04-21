import React from 'react';
import { shallow, mount } from 'enzyme';


import {SessionsList} from './sessions-list';

describe('<SessionsList />', () => {
  it('Smoke test - renders without crashing', () => {
    shallow(<SessionsList sessions={[1,2,3,]}/>);
  });
})