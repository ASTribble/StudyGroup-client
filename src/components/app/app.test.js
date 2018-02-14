import React from 'react';
import {shallow, mount} from 'enzyme';

import App from './app';

describe('<App />', () =>{
    it('Smoke test - renders without crashing', () => {
        shallow(<App />);
    });
})