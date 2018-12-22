import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(
//     persistedReducer,
//     compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())
// );

    let store = createStore(
        persistedReducer,
        compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())
    )
   let persistor = persistStore(store);

export default store;
export { persistor };