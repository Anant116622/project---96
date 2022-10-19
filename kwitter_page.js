//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA98Vu1EIgDfB8lDuPGdvJ9fQzd3n_WXO8",
      authDomain: "kwitter-b8936.firebaseapp.com",
      databaseURL: "https://kwitter-b8936-default-rtdb.firebaseio.com",
      projectId: "kwitter-b8936",
      storageBucket: "kwitter-b8936.appspot.com",
      messagingSenderId: "81651125962",
      appId: "1:81651125962:web:8cb9a566f413a9075c6e33"
    };
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

            name:user_name,
            message :msg,
            like:0
});
document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
