import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import postsSlices from './reducers/posts'

const store = configureStore({
    reducer: {
        posts: postsSlices,
    },
}, applyMiddleware(
));

export default store;