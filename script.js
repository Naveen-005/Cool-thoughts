  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getDatabase, ref, push, onValue  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBIYErfSGYg9amp1HOWU_nfEcti_FkG9fQ",
    authDomain: "cool-thoughts.firebaseapp.com",
    databaseURL: "https://cool-thoughts-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cool-thoughts",
    storageBucket: "cool-thoughts.appspot.com",
    messagingSenderId: "144254962597",
    appId: "1:144254962597:web:73e6140d0189a78fb5364c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();


    const msg_sec=document.querySelector(".msg_area");

    const dbRef = ref(db, '/messages');

  onValue(dbRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {

      const msg_box=document.createElement("div");
      const mesage=document.createElement("div");
      const author=document.createElement("div");

      mesage.innerHTML=childSnapshot.val().msg;
      author.innerHTML=childSnapshot.val().name;

      msg_box.classList.add("msg_div");
      mesage.classList.add("msg");
      author.classList.add("author");

      msg_box.appendChild(mesage);
      msg_box.appendChild(author);
      msg_sec.appendChild(msg_box);

    });
  }, {
  onlyOnce: true
  });

    const add_btn=document.querySelector("#add");
    add_btn.addEventListener("click", function(){

      var name=document.getElementById("name").value;
      var msg=document.getElementById("submit_msg").value;

      if(msg.length>1 && name.length>1)

      {

          push(dbRef, {
          name: name,
          msg: msg
          })
        .then(()=>{
         alert("Thought added successfully");
          setTimeout(10000);
         window.location="index.html";

         })
         .catch(()=>{
          alert("Error");
        });
      }

     
    });
