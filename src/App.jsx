import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { List } from './components/List';
import { deleteTodo, getTodos, toggleTodo, toggleTodo2 } from '../services/todoService';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    updateList();
  }, []);

  function updateList() {
    getTodos().then(x => setTodos(x));
  }

  async function completeHandler(todo) {
    try {
      await toggleTodo(todo);
      updateList();
    } catch(e) {
      console.log('errore', error);
    }
  }

  async function deleteHandler(todo) {
    try {
      await deleteTodo(todo);
      updateList();
    } catch (error) {
      console.log('errore', error);
    }
  }

  return (
    <>
      <List todos={todos} completeHandler={completeHandler} deleteHandler={deleteHandler} />
    </>
  )
}

export default App
