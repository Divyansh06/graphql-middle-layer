// import db from "../services/_db.js";

export const resolvers = {
    Query: {
        users: async (_, __, { dataSources }) => {
            return await dataSources.userApi.getUsers();
        },
        user: async (_, args, { dataSources }) => {
            return await dataSources.userApi.getUser(args.id);
        },
    },

    Mutation: {
        deleteUser: async (_, args, { dataSources }) => {
            const response = await dataSources.userApi.deleteUser(args.id);
            return { success: true };
        },
        deleteUserRecursive: async (_, args, { dataSources }) => {
            return await dataSources.userApi.deleteUserRecursive(args.id);
        },
        createUser: async (_, args, { dataSources }) => {
            const newUser = {
                id: Math.floor(Math.random() * 10000),
                ...args.user,
            };
            const response = await dataSources.userApi.createUser(newUser);
            return response;
        },
        updateUser: async (_, args, { dataSources }) => {
            const response = await dataSources.userApi.updateUser(args.id, args.user);
            return response;
        },
    },

    Extras: {
        User: {
            posts: async (parent, _, { dataSources }) => {
                return await dataSources.postApi.getPostsForUser(parent.id);
            }
        }
    }

};
