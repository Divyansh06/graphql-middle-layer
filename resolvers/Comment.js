// import db from "../services/_db.js";

export const resolvers = {
    Query: {
        comments: async (_, __, { dataSources }) => {
            return await dataSources.commentApi.getComments();
        },
        comment: async (_, args, { dataSources }) => {
            return await dataSources.commentApi.getComment(args.id);
        },
    },

    Mutation: {
        deleteComment: async (_, args, { dataSources }) => {
            await dataSources.commentApi.deleteComment(args.id);
            return { success: true };
        },
        createComment: async (_, args, { dataSources }) => {
            const newComment = {
                id: Math.floor(Math.random() * 10000),
                ...args.comment,
            };
            const response = await dataSources.commentApi.createComment(newComment);
            return response;
        },
        updateComment: async (_, args, { dataSources }) => {
            const response = await dataSources.commentApi.updateComment(args.id, args.comment);
        },
    },

    Extras: {
        Comment: {
            post: async (parent, _, { dataSources }) => {
                return await dataSources.postApi.getPost(parent.postId);
            }
        }
    }

};
