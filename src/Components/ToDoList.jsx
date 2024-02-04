import Card from '@mui/material/Card';
import './Styles/ToDoList.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EditIcon from '@mui/icons-material/Edit';
import { Alert } from '@mui/material';

function ToDoList({ input, setInput, todos, settodos }) {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const [showMaxTasksAlert, setShowMaxTasksAlert] = useState(false);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (todos.length < 5) {
            settodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput('');
        } else {
            // You can display an error message or take any other appropriate action
            setShowMaxTasksAlert(true);
        }
    };

    const toggleCompletion = (id) => {
        settodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        settodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const editTodo = (id) => {
        // You can implement editing logic here if needed
        console.log(`Editing todo with ID: ${id}`);
    };

    return (
        <div>
            <Card className='card' sx={{
                minWidth: 300,
                backgroundColor: '#282828',
                maxWidth: 300,
                overflow: 'hidden'
            }}>
                <h2>Add your tasks and goals</h2>
                <p className='paraTodo'>Upto 5 only</p>
                <form className='toDoForm' onSubmit={onFormSubmit}>
                    <input
                        type='text'
                        placeholder='Enter your task and goals'
                        className='inputTodo'
                        value={input}
                        required
                        onChange={onInputChange}
                    />
                    <button className='todoBtn'>Add</button>
                </form>
                <div className='todos'>
                    {todos.map((todo, index) => (
                        <div
                            key={todo.id}
                            className={todo.completed ? 'completed' : ''}
                        >
                            {`${index + 1}. ${todo.title}`} {/* Display index + 1 and task title */}

                            <div className="button-group">
                                <button onClick={() => toggleCompletion(todo.id)}>
                                    {todo.completed ? 'Undo' : 'Complete'}
                                </button>
                                <button onClick={() => deleteTodo(todo.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {showMaxTasksAlert && (
                    <Alert className='alert' severity="info" onClose={() => setShowMaxTasksAlert(false)}>
                        Maximum number of tasks reached (5)
                    </Alert>
                )}
            </Card>
        </div>
    );
}

export default ToDoList;
