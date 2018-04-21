import reducer from './session';
import { 
    sessionRequest,
    sessionSuccess,
    singleSessionSuccess,
    sessionError
  } from '../actions/get-sessions';


describe('It should update state properly', () => {

    it('Should set loading to true on sessionRequest', () => {
        const state = {
            loading: false,
        };
        const action = sessionRequest();
        const newState = reducer(state, action);

        expect(newState.loading).toEqual(true);
    });

    it('Should set session on sessionSuccess', () => {
        const state = {};
        const sessions = ['1', '2', '3'];
        const action = sessionSuccess(sessions);

        const newState = reducer(state, action);
        expect(newState.sessions).toEqual(sessions);
    });

    it('Should set loading to false on sessionSuccess', () => {
        const state = {loading: true};
        const sessions = ['1', '2', '3'];
        const action = sessionSuccess(sessions);

        const newState = reducer(state, action);
        expect(newState.loading).toEqual(false);
    });

    it('Should set error to null on sessionSuccess', () => {
        const state = {error: 'Everything is Rotten'};
        const sessions = ['1', '2', '3'];
        const action = sessionSuccess(sessions);

        const newState = reducer(state, action);
        expect(newState.error).toEqual(null);
    });

    it('Should update detailedSession on singleSessionSuccess', () => {
        const state = {};
        const session = {title: 'test session'};
        const action = singleSessionSuccess(session);

        const newState = reducer(state, action);
        expect(newState.detailedSession).toEqual(session);
        expect(newState.detailedSession.title).toEqual('test session');
    });

    it('Should set loading and error to false on singleSessionSuccess', () => {
        const state = {
            loading: true, 
            error: 'Error'
        };
        const session = {};
        const action = singleSessionSuccess(session);

        const newState = reducer(state, action);
        expect(newState.loading).toEqual(false);
        expect(newState.error).toEqual(null);
    });
});

describe ('It should create state if undefined', () => {

    it('Should set a state if state is undefined', () => {
        const state = undefined;
        const action = {type: '_UNKNOWN_ACTION'};
       
        const newState = reducer(state, action);
        expect(newState).toHaveProperty('loading');
        expect(newState).toHaveProperty('error');
        expect(newState).toHaveProperty('sessions');
        expect(newState).toHaveProperty('detailedSession');
    });
});

describe ('It should not alter state if action is unknown', () => {
    it('Should return state passed in', () => {
        const state = {title: 'Original State'};
        const action = {type: '_UNKNOWN_ACTION'};

        const newState  = reducer(state, action);
        expect(newState).toBe(state);
    })
})
