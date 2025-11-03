

const baseUrl = 'http://localhost:3000/todos';



export async function getTodos() {
    const res = await fetch(baseUrl);
    const body = await res.json();
    return body;
  }

export async function deleteTodo(todo) {
    const res = await fetch(baseUrl + '/' + todo.id, {method: 'DELETE'});
    if(!res.ok) {
        throw Error('something wrong...');
    }
}

export async function toggleTodo(todo) {
    const res = await fetch(baseUrl + '/' + todo.id, {
        method: 'PATCH',
        body: JSON.stringify({done: !todo.done})
    });
    if(!res.ok) {
        throw Error('something wrong...');
    }
}


export async function toggleTodo2(todo) {
    const res = await fetch(baseUrl + '/' + todo.id, {
        method: 'PUT',
        body: JSON.stringify({...todo, done: !todo.done})
    });
    if(!res.ok) {
        throw Error('something wrong...');
    }
}