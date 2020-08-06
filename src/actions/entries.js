import database from '../firebase/firebase'

export const setEntries = (entries) => ({
    type: "SET_ENTRIES",
    entries
})

export const resetEntries = () => ({
    type: "RESET_ENTRIES"
})

export const getBloggerEntries = (uid) => {
    return (dispatch) => {
        return database.ref(`users/${uid}/posts`).once('value').then((snapshot) => {
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

