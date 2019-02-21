import React  from 'react';
import { StateProvider } from './StateManager';
import App from "./../App";

const StateDataLayer = () => {
    const initialState = {
        randomState1: { name: 'user0' },
        color: 'orange',
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'changeName':
                return {
                    ...state,
                    randomState1: {name: action.data}
                };
            case 'changeTheme':
                return {
                    ...state,
                    color: action.data
                };

            default:
                return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    );
};

export default StateDataLayer;
