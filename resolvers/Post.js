// import db from "../services/_db.js";

export const resolvers = {
    Query: {
        posts: async (_, __, { dataSources }) => {
            return await dataSources.postApi.getPosts();
        },
        post: async (_, args, { dataSources }) => {
            return await dataSources.postApi.getPost(args.id);
        },
    },

    Mutation: {
        deletePost: async (_, args, { dataSources }) => {
            await dataSources.postApi.deletePost(args.id);
            return { success: true };
        },
        deletePostRecursive: async (_, args, { dataSources }) => {
            await dataSources.postApi.deletePostRecursive(args.id);
            return { success: true };
        },
        createPost: async (_, args, { dataSources }) => {
            const newPost = {
                id: Math.floor(Math.random() * 10000),
                ...args.post,
            };
            const response = await dataSources.postApi.createPost(newPost);
            return response;
        },
        updatePost: async (_, args, { dataSources }) => {
            const response = await dataSources.postApi.updatePost(args.id, args.post);
            return response;
        },
    },
    Extras: {
        Post: {
            comments: async (parent, _, { dataSources }) => {
                return await dataSources.commentApi.getCommentsForPostId(parent.id)
            },
            user: async (parent, _, { dataSources }) => {
                return await dataSources.userApi.getUser(parent.userId);
            }
        },
    }
};
