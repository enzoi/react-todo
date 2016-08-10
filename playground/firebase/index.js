import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBh0WdwgqUz0DyIf2EN56u3Kc5q_2ya3eo",
  authDomain: "ytk-todo-app.firebaseapp.com",
  databaseURL: "https://ytk-todo-app.firebaseio.com",
  storageBucket: "ytk-todo-app.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Yeontae',
    age: 40
  }
});

var noteRef = firebaseRef.child('notes');

var newNoteRef = noteRef.push({
  text: 'Walk the dog!!!'
});
console.log('Todo id', newNoteRef.key)
