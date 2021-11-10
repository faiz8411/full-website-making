import { useState } from "react"

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged, getIdToken, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, name, password, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser)

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/')
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
                const destination = location?.state?.from || '/home';
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
                const destination = location?.state?.from || '/home';
                history.replace(destination)

                const user = result.user;

                setUser(user)
            }).catch((error) => {
                setUser({})
            })
            .finally(() => setIsLoading(false));

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        // setToken(idToken)
                        console.log(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });


    }, [])



    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }


    return {
        user,

        isLoading,
        registerUser,
        logout,
        loginUser,
        signWithGoogle
    }
}

export default useFirebase