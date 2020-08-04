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
