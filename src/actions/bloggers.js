import database from '../firebase/firebase'

export const setBloggers = (bloggers) => ({
    type: 'SET_BLOGGERS',
    bloggers
})

export const startSetBloggers = () => {
    return (dispatch) => {
        return database.ref('users').on('value', (snapshot) => {
            const bloggers = []
            snapshot.forEach((blogger) => {
                const uid = blogger.key
                blogger = blogger.val()
                const name = blogger.name
                let allPosts
                if (!blogger.posts) {
                    allPosts = {}
                } else {
                    allPosts = blogger.posts
                }
                let posts = {}
                for (const property in allPosts) {
                    if (!allPosts[property].isPrivate) {
                        let post = allPosts[property]
                        posts = {
                            ...posts,
                            [property]: post
                        }
                    } else {
                        posts = {
                            ...posts
                        }
                    }
                  }
                const postsLength = Object.keys(posts).length
                bloggers.push({
                    uid,
                    name,
                    posts: postsLength
                })
            })
            dispatch(setBloggers(bloggers))
        })
    }
}