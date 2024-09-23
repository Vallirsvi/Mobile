import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../services/database/firebase'
import { useContext } from "react";
 
export async function LoginUsuario(email, password) {
  const { setSigned, setUserEmail} = useContext(AuthContext)
    const usuario =  await signInWithEmailAndPassword(auth, email, password);

    if(usuario){
      setSigned( true)
      setUserEmail( usuario.email)
    }
    console.log(usuario)
    return usuario;
}
 
export async function LogoutUsuaro() {
    auth.signOut()
}
 
export async function RegistarUsuario(email, password){
 
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