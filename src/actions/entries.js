import database from '../firebase/firebase'

export const setEntries = (entries) => ({
    type: "SET_ENTRIES",
    entries
})

export const getBloggerEntries = (uid) => {
    return (dispatch) => {
        database.ref(`users/${uid}/posts`).once('value').then((snapshot) => {
            const entries = []
    
            snapshot.forEach((entry) => {
                const id = entry.key
                entry = entry.val()
                entries.push({
                    uid,
                    id,
                    title: entry.title,
                    subtitle: entry.subtitle
                })
            })
            dispatch(setEntries(entries))
        })
    }
}

