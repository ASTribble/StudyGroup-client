import reducer from './session';
import { 
    sessionRequest,
    sessionSuccess,
    singleSessionSuccess,
    sessionError
  } from '../actions/get-sessions';


describe('It should update state', () => {

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

})