import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
    const [info, setInfo] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
            .then(response => setInfo(response.data))
            .catch(error => console.error(error));
    }, [page]);

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <ul>
                {info.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            <button onClick={handlePreviousPage}>Précédent</button>
            <button onClick={handleNextPage}>Suivant</button>
        </div>
    );
}

export default Api;