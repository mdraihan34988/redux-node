const configureStore = require("@reduxjs/toolkit").configureStore;
const postReducer = require("../features/post/postSlice");
const relatedPostReducer = require("../features/relatedPost/relatedPostSlice");
const { createLogger } = require("redux-logger");

const logger = createLogger();

// configure store
const store = configureStore({
    reducer: {
        post: postReducer,
        relatedPost: relatedPostReducer
    },
    middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(logger),
});

module.exports = store;
