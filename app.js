  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDSyNWkSGhPLQ5IrKumlBpW3hdV0eG3hn4",
    authDomain: "auth-53b1a.firebaseapp.com",
    databaseURL: "https://auth-53b1a-default-rtdb.firebaseio.com",
    projectId: "auth-53b1a",
    storageBucket: "auth-53b1a.appspot.com",
    messagingSenderId: "447731907538",
    appId: "1:447731907538:web:3807eed6a8b1880d77260b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();
  const signup = document.querySelector('#signup');
  signup.addEventListener('click', (e) => {
    var email = document.querySelector('.email').value;
    var password = document.querySelector('.password').value;
    
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    set(ref(database, 'users/' + user.uid), {
      email: email,
    });
    alert("user created!");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
  
  })
 