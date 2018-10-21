import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAOqyvbF-Al8vTMYGYkSd9NOgvDyHDAo2o",
    authDomain: "testproject-d1289.firebaseapp.com",
    databaseURL: "https://testproject-d1289.firebaseio.com",
    projectId: "testproject-d1289",
    storageBucket: "testproject-d1289.appspot.com",
    messagingSenderId: "746759489858"
};
firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });


export { db };