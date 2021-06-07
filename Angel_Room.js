var firebaseConfig = {
      apiKey: "AIzaSyDRKA0gd7fSj-RYL9ktjAPHcoBSGPNamuQ",
      authDomain: "angel-ad43e.firebaseapp.com",
      databaseURL: "https://angel-ad43e-default-rtdb.firebaseio.com",
      projectId: "angel-ad43e",
      storageBucket: "angel-ad43e.appspot.com",
      messagingSenderId: "1024462799881",
      appId: "1:1024462799881:web:648b77fdc02103ca44e4d8"
    };

    firebase.initializeApp(firebaseConfig);


    User_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+User_name+"! 👋";

    function AddRoom(){
          room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"Adding Room Name"
});
localStorage.setItem("room_name",room_name);
window.location="Angel_Page.html";
    }
    function getData() {
firebase.database().ref("/").on('value', function(snapshot){
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot){
       childKey = childSnapshot.key;
Room_names = childKey; console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row; });
 });
 } getData();
  function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name);
   window.location = "Angel_Page.html";
 }

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="Angel.html";
}