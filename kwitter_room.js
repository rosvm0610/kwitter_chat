//AGREGA TUS ENLACES DE FIREBASE AQUÍ
var firebaseConfig = {
      apiKey: "AIzaSyBZWHk2WlA49tIKvY7EwIJlq3B8FhczfEY",
  authDomain: "chat1-5cca0.firebaseapp.com",
  databaseURL: "https://chat1-5cca0-default-rtdb.firebaseio.com",
  projectId: "chat1-5cca0",
  storageBucket: "chat1-5cca0.appspot.com",
  messagingSenderId: "594719856668",
  appId: "1:594719856668:web:6b2383a2a80c4b0d7467d9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "agregando el nombre de sala"
      });

      localStorage.setItem("room_name", room_name);
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) { 
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Nombre de la sala" + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }