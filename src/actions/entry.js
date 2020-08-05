import database from '../firebase/firebase';

export const setEntry = (entry) => ({
    type: "SET_ENTRY",
    entry
});

export const exitEntry = () => ({
    type: "RESET"
});

export const getEntry = (uid, id) => {
    return (dispatch) => {
        database.ref(`users/${uid}/posts/${id}`).once('value').then((snapshot) => {
            const entry = snapshot.val()
            dispatch(setEntry(entry));
        });
    };
};

export const addEntry = (uid, {title, subtitle, createdAt, body}) => {
    return (dispatch) => {
        const post = { title, subtitle, createdAt, body }
        database.ref(`users/${uid}/posts/`).push(post).then((ref) => {
            console.log('post pushed: ', ref.key)
        }).catch((e) => {
            console.log(e)
        })
    }
}

export const editEntry = (uid, {title, subtitle, createdAt, body}, id) => {
    return (dispatch) => {
        const post = { title, subtitle, createdAt, body }
        database.ref(`users/${uid}/posts/${id}`).update(post).then((ref) => {
            console.log('post edited!')
        }).catch((e) => {
            console.log(e)
        })
    }
}