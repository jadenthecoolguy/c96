var firebaseConfig = {
      apiKey: "AIzaSyDrE43REjZI873PjSZ3-edbAG2LEuofxpw",
      authDomain: "kwitter-f4031.firebaseapp.com",
      databaseURL: "https://kwitter-f4031-default-rtdb.firebaseio.com",
      projectId: "kwitter-f4031",
      storageBucket: "kwitter-f4031.appspot.com",
      messagingSenderId: "339119362646",
      appId: "1:339119362646:web:8f00f40ee712525129a1f7"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome-"+user_name+"!"

function addRoom()
{
      room_name=document.getElementById9("room_name").value

      firebase.database().ref("/").child(room_name).update({
            soccerdude:"Headshot in the goal!!!!!!!"
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       
      //Start code
console.log("Your room name is"+Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
     document.getElementById("output").innerHTML += row
//End code

      });});}
getData();


function redirectToRoomName(name)
{
console.log(name)
localStorage.setItem("room_name",name)
window.location="kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}