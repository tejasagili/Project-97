var firebaseConfig = {
  apiKey: "AIzaSyCqY-twq0bYUSk7pyNgcSE8ZjzNMHX4cvU",
  authDomain: "lets-chat-ce8e9.firebaseapp.com",
  databaseURL: "https://lets-chat-ce8e9-default-rtdb.firebaseio.com",
  projectId: "lets-chat-ce8e9",
  storageBucket: "lets-chat-ce8e9.appspot.com",
  messagingSenderId: "73008299921",
  appId: "1:73008299921:web:2a64161d5650b57cd3a430"
};
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
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
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
  
