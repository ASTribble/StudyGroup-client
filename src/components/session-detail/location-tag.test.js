import React from 'react';
import {shallow, mount} from 'enzyme';


import {LocationTag} from './location-tag';

describe('<LocationTag />', () =>{
    it('Smoke test - renders `without crashing', () => {
        shallow(<LocationTag />);
    });
});