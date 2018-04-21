import React from 'react';
import {shallow, mount} from 'enzyme';


import {SessionDetail} from './session-detail';

describe('<SessionDetail />', () =>{

    const session = {
        startTime: new Date("2020-03-25T12:00:00-06:30"),
        endTime: new Date("2020-03-25T13:00:00-06:30")
    };

    it('Smoke test - renders `without crashing', () => {
        shallow(<SessionDetail dispatch={jest.fn} session={session}/>);
    });
})