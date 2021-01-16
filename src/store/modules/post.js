export default {
    actions: {
        async fetchAllPosts(ctx, limit = 3) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            const posts = await res.json()
            // call mutation
            ctx.commit('updatePosts', posts)
            // ctx
            //  .getters.[getter]
            //  .dispatch('action')
            //  .state
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: []
    },
    getters: {
        validPosts(state) {
            return state.posts.filter(p => p.title && p.body)
        },
        allPosts(state) {
            return state.posts
        },
        countAllPosts(state, getters) {
            return getters.validPosts.length
        }
    }
}