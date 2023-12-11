import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../../Firebase/Firebase.config'

export const AuthContext =createContext();

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser)
        });
        
        return () => {
            unsubscribe();
        }
        
    },[]);
    
    const auth = getAuth(app);

    const singInWithEmail = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {user, singInWithEmail };
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;