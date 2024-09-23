import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../services/database/firebase'
 
export async function LoginUsuario() {
    const usuario =  await signInWithEmailAndPassword(auth, "teste@gmail.com", "123456789");
    console.log(usuario)
    return usuario;
}
 
export async function LogoutUsuaro() {
    auth.signOut()
}
 
export async function RegistarUsuario(){
 
   await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}