
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML = "Welcome "+user_name+ "!";
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
    });

    localStorage.setItem("roome_name", room_name)

    window.location("kwitter_page.htlm");
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row = "<div class = 'room_name' id=" +Room_names+ " onclick='redirectToRoomeName(this.id)'>#"+Room_names+ "</div><hr>";
document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();

function redirectToRoomeName()
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

