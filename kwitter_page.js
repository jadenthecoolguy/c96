//YOUR FIREBASE LINKS
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

      var user_name=localStorage.getItem("user_name")
      var room_name=localStorage.getItem("room_name")

      function send()
      {
            var msg=document.getElementById("msg").value
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            })
            document.getElementById("msg").value=""
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
