import axios from "axios";


const baseUrl = 'http://localhost:3000/todos';

const wait = (time) => new Promise(r => setTimeout(() => {r()}, time));

export async function getTodos() {
    const res = await axios.get(baseUrl);
    // await wait(1000);
    return res.data;
}

export async function addTodo(text) {
    const res = await axios.post(baseUrl, {text, done: false});
    return res.data;
}

export async function deleteTodo(todo) {
    await axios.delete(baseUrl + '/' + todo.id);
}

export async function toggleTodo(todo) {
    await axios.patch(baseUrl + '/' + todo.id, {done: !todo.done});
}


export async function toggleTodo2(todo) {
    await axios.put(baseUrl + '/' + todo.id, {...todo, done: !todo.done});
}