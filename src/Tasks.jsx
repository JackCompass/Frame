import React, { useContext } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Card, makeStyles } from "@material-ui/core";
import { db } from './firebase';
import { userAPI } from './Navbar';

const useStyles = makeStyles({
	root: {
		maxWidth: 290,
		margin: "5px 5px",
		minWidth: 290,

	},
	media: {
		height: 140
	}
});

const Tasks = ({ id, task, status }) => {

	const classes = useStyles();
	const user = useContext(userAPI);

	const removeTask = () => {
		db.ref('users/' + user.uid).child(id).remove();
	}

	const taskCompleted = (event) => {
		db.ref('users/' + user.uid).child(id).update({
			status: 'completed',
		})
		document.getElementById(id).style.textDecoration = 'line-through';
	}

	const singleTask = (event) => {
		event.target.style.textDecoration = "line-through";
	}

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image="https://source.unsplash.com/1600x900/?programming,coding,laptop,"
					title="Contemplative Reptile"
				/>
				<CardContent id = {id} onClick={singleTask}>
					{status === "pending" ? (
						<Typography gutterBottom variant="subtitle1" component="h2">
							{task}
						</Typography>
					) : (
						<Typography style={{textDecoration: "line-through"}}gutterBottom variant="subtitle1" component="h2">
							{task}
						</Typography>
					)}

					{/* <Typography variant="body2" color="textSecondary" component="p">
						
					</Typography> */}
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button onClick={taskCompleted} size="small" color="primary">
					Finished
				</Button>
				<Button onClick={removeTask} size="small" color="primary">
					Delete
				</Button>
			</CardActions>
		</Card>
	);
}

export default Tasks;