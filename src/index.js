import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let initialState = {
    items: [
        {
            title: "TODO1",
            description: "Description of todo1"
        },
        {
            title: "TODO2",
            description: "Description of todo2"
        },
        {
            title: "TODO3",
            description: "Description of todo3"
        }
    ]
};


function myReducer(state = initialState, action) {
    console.log('In reducer. state = ', initialState);
    console.log('In reducer. action.index = ', action.index);
    switch (action.type) {
        case 'DELETE_ITEM':
            let ns={...state};
            console.log('In reducer. Смотрим, что скопировалось в новый стэйт', ns);
            ns.items.splice(action.index, 1);
            console.log('После применения сплайса', ns);
            return ns;
        default:
            return state;
    }
}

const store = createStore(myReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
