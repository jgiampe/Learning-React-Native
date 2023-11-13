import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const createApolloClient = () => {
    const myIp = "192.168.1.185"

    const client = new ApolloClient({
        uri: `http://${myIp}:4000/graphql`,
        cache: new InMemoryCache(),
    })

    return client
}

export default createApolloClient