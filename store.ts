import {configureStore} from '@reduxjs/toolkit';
import todosReducer from './src/redux/todoSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
