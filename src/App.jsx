import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { List } from './components/List';
import { deleteTodo, getTodos, toggleTodo, toggleTodo2 } from '../services/todoService';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function App() {
  const qClient = useQueryClient();

  const query = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  });

  const completeMutation = useMutation({
    mutationKey: ['toggleTodo'],
    mutationFn: td => toggleTodo(td),
    onSuccess: () => {
      qClient.invalidateQueries({queryKey: ['todos']})
    }
  });

  const deleteMutation = useMutation({
    mutationKey: ['deleteTodo'],
    mutationFn: td => deleteTodo(td),
    onSuccess: (_, td) => {
      qClient.setQueryData(['todos'], tds => tds.filter(x => x.id !== td.id));
    }
  });

  return (
    <>
      {query.isPending && <h1>attendi...</h1>}
      {query.isError && <h3>errore: {query.error.message}</h3>}
      {query.isSuccess && <List 
                            todos={query.data} 
                            completeHandler={completeMutation.mutate} 
                            deleteHandler={deleteMutation.mutate} 
                          />
      }
    </>
  )
}

export default App
