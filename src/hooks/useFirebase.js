import { useState } from "react"

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveToDb(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/')
                // Signed in 
                // const user = userCredential.user;


                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            })
            .finally(() => setIsLoading(false));


    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));
    }
    const signWithGoogle = (history, location) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {


                const user = result.user;
                saveToDb(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/';
                history.replace(destination)
                // setUser(user)
            }).catch((error) => {
                setUser({})
            })
            .finally(() => setIsLoading(false));

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // getIdToken(user)
                // .then(idToken => {
                // setToken(idToken)
                // console.log(idToken)
                // })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });


    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }
    const saveToDb = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user,
        admin,
        isLoading,
        registerUser,
        logout,
        loginUser,
        signWithGoogle
    }
}

export default useFirebase