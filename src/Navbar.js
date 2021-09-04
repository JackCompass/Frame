import React, { createContext, useEffect, useState } from "react";
import { AppBar, Avatar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { auth, provider } from './firebase';
import Form from "./Form";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginBottom: "5px",
		display: 'flex',
	},
	title: {
		flexGrow: 1
	},
	navbar: {
		backgroundImage: "linear-gradient(to right, green , yellow)"
	}
}));


// creating a context API 
const userAPI = createContext();


const Navbar = () => {
	const classes = useStyles();
	const [user, setUser] = useState(null);

	const myauth = () => {
		if (!user) {
			auth.signInWithPopup(provider).then((result) => {
				let user = result.user;
				setUser(user);
				
			}).catch((error) => {
				// showing the error message via alert to the user.
				alert(error.message);
			})
		}
		else {
			auth.signOut().then(() => {
				alert("You have successfully logged out.");
				setUser(null);
			}).catch((error) => {
				alert(error.message);
			})
		}
	}

	useEffect(() => {
		const cleanup = auth.onAuthStateChanged((usr) => {
			if (usr) {
				setUser(usr);
			}
			else {
				setUser(null);
			}
		})
		return () => {
			cleanup()
		}
	}, []);

	const applicationName = "Frame"

	return (
		<>
			<div className={classes.root}>
				<AppBar position="static" className={classes.navbar}>
					<Toolbar>
						<Typography variant="h5" className={classes.title}>
							{applicationName}
						</Typography>
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit"
							onClick={myauth}
						>
							{user ? (<Avatar alt="Remy Sharp" src={user.photoURL} />) : (<AccountCircle />)}

						</IconButton>
					</Toolbar>
				</AppBar>
			</div>
			{/* Creating a context provider */}
			<userAPI.Provider value={user}>
				<Form />
			</userAPI.Provider>

		</>
	);
};

export default Navbar;
export {userAPI};
