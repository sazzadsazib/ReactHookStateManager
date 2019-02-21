## Context Api Boilerplate for class and Hook

So after hook came in action was trying to mix useContext and ContextApi with Reducer to work together. 

### So why I need to see this
Well `useReducer` helps you to use for only functional component not class component so if you are in any legacy project with ```class Component``` trying to use `useReducer` & `useContext` api also `context api Consumer` this repo will help you out.

I am not sure if this is right approach feel free to share your opinion. 

### How this works?

for    `class Component`  

`import {AppContextConsumer} from './Hooks/StateManager';`

and wrap it with your component like

``AppContextConsumer(YourComponent)``

when you export the file

`state available: this.props.context`  & `reducer: this.props.reducer`

<br/>

For `Hook`

`import {getState} from './Hooks/StateManager';`
and use them as 

`  const [ state , dispatch] = getState();`


Thanks, 

