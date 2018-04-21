import React from 'react';
import {shallow, mount} from 'enzyme';


import {SessionNotes} from './session-notes';

describe('<SessionNotes />', () =>{
    it('Smoke test - renders `without crashing', () => {
        shallow(<SessionNotes notes={['a','b','c']}/>);
    });
});