
var firebaseConfig = {
      apiKey: "AIzaSyATyZzbEJhXUTRl6uLMyz1tIHkTV2zty4M",
      authDomain: "kwitter-e5cd4.firebaseapp.com",
      databaseURL: "https://kwitter-e5cd4-default-rtdb.firebaseio.com",
      projectId: "kwitter-e5cd4",
      storageBucket: "kwitter-e5cd4.appspot.com",
      messagingSenderId: "51352802964",
      appId: "1:51352802964:web:24048ca39e528b88ecc681"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
   room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_Name -" + Room_names);
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



