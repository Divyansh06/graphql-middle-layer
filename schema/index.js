export const typeDefs = `#graphql
    type User {
        id: Int!,
        name: String!,
        username: String!,
        email: String!,
        phone: String!,
        website: String!
        posts: [Post!]
    }

    type Comment {
        id: Int!,
        name: String!,
        email: String!,
        body: String!,
        post: Post!
    }
    
    type Post {
        id: Int!,
        title: String!,
        body: String!,
        user: User!
        comments: [Comment!]
    }

    type DeleteResponse {
        success: Boolean!
    }

    input CreateUserInput {
        name: String!,
        username: String!,
        email: String!,
        phone: String!,
        website: String!
    }

    input CreatePostInput {
        title: String!,
        body: String!,
        userId: Int!
    }

    input CreateCommentInput {
        name: String!,
        email: String!,
        body: String!,
        postId: Int!
    }

    input UpdateUserInput {
        name: String,
        username: String,
        email: String,
        phone: String,
        website: String
    }

    input UpdatePostInput {
        title: String,
        body: String,
        userId: Int
    }

    input UpdateCommentInput {
        name: String,
        email: String,
        body: String,
        postId: Int
    }

    type Query {
        users: [User],
        user(id: Int!): User,
        comments: [Comment],
        comment(id: Int!): Comment,
        posts: [Post]
        post(id: Int!): Post,
    }

    type Mutation {
        deleteComment(id: Int!): DeleteResponse!
        deletePost(id: Int!): DeleteResponse!
        deletePostRecursive(id: Int!): DeleteResponse!
        deleteUser(id: Int!): DeleteResponse!
        deleteUserRecursive(id: Int!): DeleteResponse!
        createComment(comment: CreateCommentInput!): Comment!
        createPost(post: CreatePostInput!): Post!
        createUser(user: CreateUserInput!): User!
        updateComment(id: Int!, comment: UpdateCommentInput!): Comment!
        updatePost(id: Int!, post: UpdatePostInput!): Post!
        updateUser(id: Int!, user: UpdateUserInput!): User!
    }
`;
