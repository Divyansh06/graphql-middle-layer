import { compileResolvers } from "../utils/helpers.js";
import { resolvers as CommentResolver } from './Comment.js';
import { resolvers as PostResolver } from './Post.js';
import { resolvers as UserResolver } from './User.js';

const resolvers = [
    UserResolver,
    PostResolver,
    CommentResolver,
]

const RootResolver = compileResolvers(resolvers);
export default RootResolver;