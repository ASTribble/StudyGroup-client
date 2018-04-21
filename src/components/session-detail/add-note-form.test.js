import React from 'react';
import {shallow, mount} from 'enzyme';


import {AddNoteForm} from './add-note-form';

describe('<AddNoteForm />', () =>{
    it('Smoke test - renders `without crashing', () => {
        shallow(<AddNoteForm handleSubmit={jest.fn}/>);
    });
});