const resolvers = {
    Query: {
        hello: () => {
            return "Hello Christian, welcome to GraphQL!";
        },
    },
};

module.exports = resolvers;