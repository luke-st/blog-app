import database from '../firebase/firebase'

export const setBloggers = (bloggers) => ({
    type: 'SET_BLOGGERS',
    bloggers
})

export const startSetBloggers = () => {
    return (dispatch) => {
        return database.ref('users').once('value').then((snapshot) => {
            const bloggers = []
    
            snapshot.forEach((blogger) => {
                const uid = blogger.key
                blogger = blogger.val()
                bloggers.push({
                    uid,
                    name: blogger.name,
                    posts: blogger.posts.length - 1
                })
            })
            dispatch(setBloggers(bloggers))
        })
    }
}