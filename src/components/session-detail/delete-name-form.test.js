import React from 'react';
import {shallow, mount} from 'enzyme';


import {DeleteNameForm} from './delete-name-form';

describe('<DeleteNameForm />', () =>{
    it('Smoke test - renders `without crashing', () => {
        shallow(<DeleteNameForm handleSubmit={jest.fn} names={['a','b','c']}/>);
    });
});