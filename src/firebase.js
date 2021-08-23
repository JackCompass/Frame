import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


const firebaseConfig = {
	apiKey: "AIzaSyCRRVLfkNwEKbZcbjXD_R-LdzvbOpTA_CY",
	authDomain: "todoist-todo.firebaseapp.com",
	databaseURL: "https://todoist-todo-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "todoist-todo",
	storageBucket: "todoist-todo.appspot.com",
	messagingSenderId: "438637651897",
	appId: "1:438637651897:web:3a1ccbf3631b9d8300f868"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();
var provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};