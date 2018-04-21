import React from 'react';
import { shallow, mount } from 'enzyme';


import { GroupPage } from './group-page';

describe('<GroupPage />', () => {
  it('Smoke test - renders without crashing', () => {
    shallow(<GroupPage dispatch={jest.fn} />);
  });
})