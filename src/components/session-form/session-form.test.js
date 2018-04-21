import React from 'react';
import {shallow, mount} from 'enzyme';


import {SessionForm} from './session-form';

describe('<SessionForm />', () =>{
    it('Smoke test - renders `without crashing', () => {
        shallow(<SessionForm handleSubmit={jest.fn}/>);
    });
});