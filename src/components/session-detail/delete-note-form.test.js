import React from 'react';
import {shallow, mount} from 'enzyme';


import {DeleteNoteForm} from './delete-Note-form';

describe('<DeleteNoteForm />', () =>{
    it('Smoke test - renders `without crashing', () => {
        shallow(<DeleteNoteForm handleSubmit={jest.fn} notes={['a','b','c']}/>);
    });
});