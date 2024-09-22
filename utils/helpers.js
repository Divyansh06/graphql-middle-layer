import { print } from 'graphql'

export const compileResolvers = (resolvers) => {
    let root = {
        Query: {},
        Mutation: {}
    };

    resolvers.forEach(resolver => {
        root.Query = { ...root.Query, ...resolver.Query }
        root.Mutation = { ...root.Mutation, ...resolver.Mutation }
        root = { ...root, ...resolver.Extras }
    });

    return root;
}
