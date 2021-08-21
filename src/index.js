import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import {createStore} from "redux"
import commentReducer from './reducer/comments'
import CommentApp from './container/CommentApp'


const store = createStore(commentReducer)

//     class Index extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <CommentApp />
//             </Provider>

//         )
//     }
// }
ReactDOM.render( <Provider store={store}>
    <CommentApp />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
