import React from 'react';
import {getState} from './Hooks/StateManager';

// hook approach
const AppFunc = () => {
    const [{ color }, dispatch] = getState();
    return (
        <div>
            <button
                style={{background: color, color: 'white', padding: '10px 20px'}}
                onClick={() => dispatch({
                    type: 'changeTheme',
                    data: 'purple'
                })}
            >
                Click to Change Color
            </button>
            <br/><br/>
            {JSON.stringify(getState()[0])}
        </div>
    );
};

export default AppFunc;
