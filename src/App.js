import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
