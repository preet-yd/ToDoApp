import React from 'react';

function Todo({ todos }) {
    return (
        <>
            {todos.map(function (todo) {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>Mark as Completed</button>
                    </div>
                );
            })}
        </>
    );
}

export default Todo;
