import database from '../firebase/firebase';

export const setEntry = (entry) => ({
    type: "SET_ENTRY",
    entry
});

export const getEntry = (uid, id) => {
    return (dispatch) => {
        database.ref(`users/${uid}/posts/${id}`).once('value').then((snapshot) => {
            const entry = snapshot.val()
            dispatch(setEntry(entry))
            return entry
        });
    };
};

export const addEntry = (uid, {title, subtitle, createdAt, body, isPrivate}) => {
    return (dispatch) => {
        const post = { title, subtitle, createdAt, body, isPrivate }
        database.ref(`users/${uid}/posts/`).push(post)
    }
}

export const editEntry = (uid, {title, subtitle, createdAt, body, isPrivate}, id) => {
    return (dispatch) => {
        const post = { title, subtitle, createdAt, body, isPrivate }
        database.ref(`users/${uid}/posts/${id}`).update(post)
    }
}

export const removeEntry = (uid, id) => {
    return (dispatch) => {
        database.ref(`users/${uid}/posts/${id}`).remove()
    }
}