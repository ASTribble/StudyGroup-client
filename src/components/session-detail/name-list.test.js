import React from 'react';
import {shallow, mount} from 'enzyme';


import {NameList} from './name-list';

describe('<NameList />', () =>{
    it('Smoke test - renders `without crashing', () => {
        shallow(<NameList names={['a','b','c']}/>);
    });
});