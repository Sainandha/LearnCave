import { getAuth, sendPasswordResetEmail } from "firebase/auth";
let reset = document.querySelector("#forgot")
reset.addEventListener("click",function(){
let email = document.querySelector("#email3") 

    const auth = getAuth();
    sendPasswordResetEmail(auth, email.value)
      .then(() => {
        console.log("Reset password link sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });







})