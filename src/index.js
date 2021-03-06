import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import * as _ from 'lodash';
import './index.css';
import {App} from './App';
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
    console.log('In reducer. state = ', state);
    //let ns = {...state};
    let ns = _.cloneDeep(state);

    switch (action.type) {
        case 'DELETE_ITEM':
            console.log('In reducer. In Delete action.index = ', action.index);
            console.log('In reducer. In Delete Смотрим, что скопировалось в новый стэйт', ns);
            ns.items.splice(action.index, 1);
            console.log('После применения сплайса', ns);
            return ns;
//            console.log('Пытаюсь удалить задачу с индексом: ', action.index);
//            return Object.assign({}, state, state.items.splice(action.index, 1));

        case 'ADD_ITEM':
            console.log('In reducer. In Add');
            ns.items.push({title: action.title, description: action.description});
            return ns;
//           console.log('Пытаюсь добавить новую задачу: ',{title: action.title, description: action.description});
//           return Object.assign({}, state, state.items.push({title: action.title, description: action.description}));
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
