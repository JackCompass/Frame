import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { db } from './firebase';
import firebase from 'firebase';
import { userAPI } from './Navbar';
import Tasks from "./Tasks";

const useStyles = makeStyles((theme) => ({
	form: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		display: "flex",
		justifyContent: "center",
	},
	input: {
		marginRight: theme.spacing(1)
	},
	gridContainer: {
		display: "flex",
		justifyContent: "space-evenly",
		flexWrap: "wrap",
	},
}));

const Form = () => {
	const classes = useStyles();

	// task is the variable to storet the current input task which user wants to add.
	const [task, setTask] = useState('');

	// item is the list of all the task which user has already added in the database.
	const [item, setItem] = useState([]);

	const user = useContext(userAPI);

	const addTask = (event) => {
		// Preventing the reloading of page on form submission.
		event.preventDefault();

		// Checking weather the user is logged in or not
		if (user) {
			// Using firebase database instance to insert the data into the RTDB.
			// https://firebase.google.com/docs/reference/js/firebase.User
			db.ref('users/' + user.uid).push({
				// https://firebase.google.com/docs/reference/node/firebase.database.ServerValue
				timestamp: firebase.database.ServerValue.TIMESTAMP,
				item: task,
				status: "pending",
			});
		}
		else {
			// Asking them to login 
			alert("Please login before adding Task");
		}
		document.getElementById('basic-outlined').value = '';
		setTask('');

	}

	useEffect(() => {

		// Now here first we check weather the user is logged in or not.
		if (user) {
			// If the user is logged in.
			db.ref("users/" + user.uid).on('child_added', (data) => {
				setItem((prevState) => {
					return [...prevState, {
						key: data.key,
						item: data.val().item,
						status : data.val().status,
					}];
				});
			})

			db.ref("users/" + user.uid).on('child_removed', (data) => {
				// Here we have to remove the object from the item list.
				setItem((prevState) => {
					for (let i = 0; i < prevState.length; i++) {
						if (prevState[i].key === data.key) {
							prevState.splice(i, i + 1);
							break;
						}
					}
					return [...prevState];
				})
			})
		}
	}, [user])

	return (
		<>
			<form className={classes.form} autoComplete="off" onSubmit={addTask}>
				<TextField
					className={classes.input}
					id="basic-outlined"
					label="Task"
					variant="outlined"
					onChange={(event) => { setTask(event.target.value) }}
				/>
				<Button disabled={!task} type="submit" variant="contained" color="textSecondary">Add Task</Button>
			</form>
			<div className={classes.gridContainer}>
				{item.map((todo) => {
					return (
						<Tasks
							key={todo.key}
							id={todo.key}
							task={todo.item}
							status = {todo.status}
						/>
					)
				})}
			</div>
		</>
	);
};

export default Form;
