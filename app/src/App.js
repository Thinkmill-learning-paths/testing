import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import './App.css';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
	return (
		<li style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
			<span className="label">{todo.text}</span>
			<div className="actions">
				<button className="btn-picto" onClick={() => completeTodo(index)}>
					<i aria-hidden="true">
						{todo.isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
					</i>
				</button>
				<button className="btn-picto" onClick={() => removeTodo(index)}>
					<i aria-hidden="true">
						<DeleteIcon />
					</i>
				</button>
			</div>
		</li>
	);
};

const TodoForm = ({ addTodo }) => {
	const [value, setValue] = React.useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="newitem">Add to the todo list</label>
			<input
				type="text"
				name="newitem"
				id="newitem"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type="submit">Add item</button>
		</form>
	);
};

const App = () => {
	const [sortByStatus, setSortByStatus] = useState(false);
	const [todos, setTodos] = useState([
		{
			text: 'Learn about React',
			isCompleted: false,
		},
		{
			text: 'Meet friend for lunch',
			isCompleted: false,
		},
		{
			text: 'Build really cool todo app',
			isCompleted: false,
		},
	]);

	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const completeTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	const sortTodo = () => {
		setSortByStatus((prev) => !prev);
		var sortedArray = [];
		var doneArray = todos.filter((item) => item.isCompleted);
		var notDoneArray = todos.filter((item) => !item.isCompleted);
		console.log('doneArray', doneArray);
		console.log('notDoneArray', notDoneArray);
		sortedArray = [...notDoneArray, ...doneArray];
		console.log('sortedArray', sortedArray);
		return sortedArray;
	};

	return (
		<main id="todolist">
			<h1>
				Todo List
				<span>Get things done, one item at a time.</span>
			</h1>
			<ul className="todo-list">
				{todos ? (
					<>
						{todos.map((todo, index) => (
							<Todo
								key={index}
								index={index}
								todo={todo}
								completeTodo={completeTodo}
								removeTodo={removeTodo}
							/>
						))}
						<div className={sortByStatus ? 'togglebutton togglebutton-checked' : 'togglebutton'}>
							<label htmlFor="name">
								<span className="togglebutton-label">Move done items at the end?</span>
								<span className="tooglebutton-box"></span>
							</label>
							<input id="name" type="checkbox" name="name" onChange={sortTodo} />
						</div>
					</>
				) : (
					<p className="emptylist">Your todo list is empty.</p>
				)}
				<TodoForm addTodo={addTodo} />
			</ul>
		</main>
	);
};

export default App;
