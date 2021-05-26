import firebase from 'firebase/app'
import 'firebase/auth';


const app = firebase.initializeApp({
    apiKey: 'AIzaSyDP3e0xjHN4l6Fiw46YAeINfc7uCxB6oFw',
    authDomain: 'webapp-cace0.firebaseapp.com',
    projectId: 'webapp-cace0',
    storageBucket: 'webapp-cace0.appspot.com',
    messagingSenderId: '307486684584',
    appId: '1:307486684584:web:e002d93524661aa666599d',
});


export const auth = app.auth();
export default app;
