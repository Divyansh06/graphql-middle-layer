import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/index.js";
import RootResolver from "./resolvers/index.js";
import UserApi from './services/UserApi.js';
import PostApi from "./services/PostApi.js";
import CommentApi from "./services/CommentApi.js";

const server = new ApolloServer({
    typeDefs,
    resolvers: RootResolver,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.GRAPHQL_PORT },
    context: async () => {
        const { cache } = server;
        return {
            dataSources: {
                userApi: new UserApi({ cache }),
                postApi: new PostApi({ cache }),
                commentApi: new CommentApi({ cache }),
            }
        }
    }
});

console.log(`🚀 Server ready at ${url}`);
