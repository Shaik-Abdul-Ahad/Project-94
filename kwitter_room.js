
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAyWH5hsYtgoCqvlmez3XZegVEteSj7mQc",
    authDomain: "chat-app-ahad.firebaseapp.com",
    databaseURL: "https://chat-app-ahad-default-rtdb.firebaseio.com",
    projectId: "chat-app-ahad",
    storageBucket: "chat-app-ahad.appspot.com",
    messagingSenderId: "994333688656",
    appId: "1:994333688656:web:38a33e7e5796d1e084e255"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = " Welcome " + user_name  + "!"

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    
    //End code
    });});}
getData();