import React from 'react';
import {getState} from './Hooks/StateManager';

const App = () => {
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
        </div>
    );
};

export default App;
