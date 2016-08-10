import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBh0WdwgqUz0DyIf2EN56u3Kc5q_2ya3eo",
    authDomain: "ytk-todo-app.firebaseapp.com",
    databaseURL: "https://ytk-todo-app.firebaseio.com",
    storageBucket: "ytk-todo-app.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
