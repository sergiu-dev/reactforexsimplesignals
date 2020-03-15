import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyCLzxjLdXLUUDjF-RqBpBI0S43SwqKNTWU",
	authDomain: "forexsimplesignals-8e376.firebaseapp.com",
	databaseURL: "https://forexsimplesignals-8e376.firebaseio.com",
	projectId: "forexsimplesignals-8e376",
	storageBucket: "forexsimplesignals-8e376.appspot.com",
	messagingSenderId: "118612069701",
	appId: "1:118612069701:web:0fd79b0871bb4eb482422c",
	measurementId: "G-E0C86D1T19"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

