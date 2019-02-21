import React from 'react';
import {AppContextConsumer} from './Hooks/StateManager';

// class approach

class AppClass extends React.Component{
    render() {
        return(
            <div>
                <button
                    style={{background: this.props.context.color, color: 'white', padding: '10px 20px'}}
                    onClick={()=>this.props.reducer({
                        type: 'changeTheme',
                        data: 'red'
                    })}>Click to Change Color</button>
                <br/><br/>
                {JSON.stringify(this.props.context)}
            </div>
        )}
}


export default AppContextConsumer(AppClass);
