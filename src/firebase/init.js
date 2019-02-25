var config = {
  apiKey: "AIzaSyANAPqTMn3PbRZeu2ZGVjqP3THVYpz4At0",
  authDomain: "vue-chat-150b4.firebaseapp.com",
  databaseURL: "https://vue-chat-150b4.firebaseio.com",
  projectId: "vue-chat-150b4",
  storageBucket: "vue-chat-150b4.appspot.com",
  messagingSenderId: "328876341314"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
