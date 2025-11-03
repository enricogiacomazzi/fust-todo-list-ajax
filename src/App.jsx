import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { List } from './components/List';
import { deleteTodo, getTodos, toggleTodo, toggleTodo2 } from '../services/todoService';
import { useQuery } from '@tanstack/react-query';

function App() {
  const query = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  });

  console.log('query', query.isError, query.data);
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   updateList();
  // }, []);

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
      {query.isPending && <h1>attendi...</h1>}
      {query.isError && <h3>errore: {query.error.message}</h3>}
      {query.isSuccess && <List todos={query.data} completeHandler={completeHandler} deleteHandler={deleteHandler} />}
    </>
  )
}

export default App
