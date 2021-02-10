
//ADD YOUR FIREBASE LINKS HERE

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAqy-XF6YAKFqKV8kV0Bo7WevuWW_D01Nk",
    authDomain: "class-test-5f740.firebaseapp.com",
    projectId: "class-test-5f740",
    storageBucket: "class-test-5f740.appspot.com",
    messagingSenderId: "451490314997",
    appId: "1:451490314997:web:a3747a3193f0ee593b23bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  
      //End code
      });});}
getData();
