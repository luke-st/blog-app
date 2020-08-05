import database, { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid, displayname) => ({
    type: 'LOGIN',
    uid,
    displayname
})

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startLoginEmail = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const startEmailSignup = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const accountCheck = (uid, displayname) => {
    database.ref(`users/${uid}`).once('value').then((snapshot) => {
        const userData = snapshot.val()
        if (!userData) {
            database.ref(`users/${uid}`).set({name: displayname})
        }
    })
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}