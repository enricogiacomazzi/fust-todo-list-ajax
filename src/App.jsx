import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { List } from './components/List';
import { deleteTodo, getTodos, toggleTodo, toggleTodo2 } from '../services/todoService';

function App() {
  const [todos, setTodos] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    updateList();
  }, []);

  async function updateList() {
    try {
      setPending(true);
      const tds = await getTodos();
      setTodos(tds)
    }
    catch(e) {
      setError('qualcosa è andato storto... :(');
    } finally {
      setPending(false);
    }

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
      {pending && <h1>attendi...</h1>}
      {error && <h3>errore: {error}</h3>}
      <List todos={todos} completeHandler={completeHandler} deleteHandler={deleteHandler} />
    </>
  )
}

export default App
