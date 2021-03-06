import React, { useState, useEffect, useContext, createContext } from 'react';
import firebaseClient from './firebaseClient';
import firebase from 'firebase/app';
import 'firebase/auth';
import nookies from 'nookies'
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    firebaseClient();
    const [user, setUser] = useState(null)
    useEffect(() => {
        return firebase.auth().onIdTokenChanged(async user => {
            if (!user) {
                setUser(null);
                nookies.destroy(undefined, 'token')
                nookies.destroy(undefined, 'user')
                return;
            }
            const token = await user.getIdToken();
            setUser(user);
            nookies.set(undefined, 'token', token, {})
            nookies.set(undefined, 'user', JSON.stringify(user), {})
        });
    }, []);
    return (<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>);
};

export const useAuth = () => useContext(AuthContext);