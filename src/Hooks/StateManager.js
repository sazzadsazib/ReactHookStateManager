import React, {createContext, useContext, useReducer} from 'react';
export const StateContext = createContext();
export const AppContextConsumer = (Component) => {
    return () => (
        <StateContext.Consumer>
            {(context) =>  <Component context={context[0]} reducer={context[1]} />}
        </StateContext.Consumer>
    )
};
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
export const getState = () => useContext(StateContext);
