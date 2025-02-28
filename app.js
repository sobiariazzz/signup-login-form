
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from
"https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC-Z4CmT0BsYfDzg5u3LWv5czKy_UfU7Us",
    authDomain: "sign-login-form.firebaseapp.com",
    projectId: "sign-login-form",
    storageBucket: "sign-login-form.firebasestorage.app",
    messagingSenderId: "152067594880",
    appId: "1:152067594880:web:059637bd771127146b6465",
    measurementId: "G-BZDRYG0BYC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);


  document.getElementById("signupBtn")?.addEventListener("click" , () => {
    let email = document.getElementById("email").value ;
    let password = document.getElementById("password").value ;

    createUserWithEmailAndPassword(auth , email ,password)
    .then(() =>{
        alert("signup Successfull");
        window.location.href = "welcome.html"
    }) 
    .catch(error => document.getElementById("message").innerText = error.message);
  });

  document.getElementById("loginBtn")?.addEventListener("click", () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {

    alert("Login Successful");
    window.location.href = "welcome.html";
    })
    .catch(error => document.getElementById("message").innerText = error.message);
})
export function logout() {
    signOut(auth)
    .then(() => {
    alert("Logged out");
    window.location.href = "index.html";
    })
    .catch(error => console.error("Logout Error:", error));
    }
    document.getElementById("logoutBtn")?.addEventListener("click", logout);