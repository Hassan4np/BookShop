
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from "../Firebase/firebase.comfig";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children}) => {
    const [user,setuser] = useState({});
    const [isLoading,setisLoading] = useState(true)
//google email passwrd login--->
const UserLogin=(email,password)=>{
    setisLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
};
//google login----->
const UserGoogleLogin = () => {
    setisLoading(true)
    return signInWithPopup(auth, provider);
}
//User sign up------->
const UserSignup=(email,password)=>{
    setisLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
};
    //UserLogout------->
    const UserLogout = () => {
        setisLoading(true)
        return signOut(auth);
    }
//userAuth----->
useEffect(() => {
    onAuthStateChanged(auth, (current) => {
        setuser(current)
        setisLoading(false)
    })
}, []);
  const Authinfo = {
    UserLogin,UserGoogleLogin,UserSignup,UserLogout,user,isLoading
  };
  return (
    <div>
      <AuthContext.Provider value={Authinfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
