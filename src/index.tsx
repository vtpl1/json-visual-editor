import React from 'react';
import { createRoot } from 'react-dom/client';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import './index.scss';

import { configureStore } from '@reduxjs/toolkit';
import { textareaSlice } from './features/textarea/textareaSlice';
import { dataSlice } from './features/data/dataSlice';

import 'bootstrap';

// ToDo: Add `redux-localstorage` to persiste the data

const rootReducer = combineReducers({
  data: dataSlice.reducer,
  textarea: textareaSlice.reducer,
});
const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
const container = document.getElementById('myApp');
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

