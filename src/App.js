import React from 'react';
import AppFunc from './AppFunc';
import AppClass from "./AppClass";
// class approach

class App extends React.Component{
    render() {
        return(
            <div>
                <p style={{textAlign: 'center'}}>Context Api</p>
                <br/><br/>
                <div style={{display: 'flex'}}>
                <div style={{width: '49%', background: '#ff000033', padding: 40}}>
                    <div style={{ margin: '0 auto', textAlign: 'center'}}>
                        <p>Class Approach</p>
                        <AppClass />
                    </div>
                </div>
                <div style={{width: '49%', background: '#005aff38',padding: 40}}>
                    <div style={{ margin: '0 auto', textAlign: 'center'}}>
                        <p>Hook Approach</p>
                       <AppFunc />
                    </div>
                </div>
            </div>
            </div>
        )}
}


export default App;
