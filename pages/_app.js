import App, { Container } from 'next/app'
import { StoreProvider } from "../components/store"
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'

class MyApp extends App {
  render () {
    const {Component, pageProps, apolloClient} = this.props
    return (
        <Container>
          <ApolloProvider client={apolloClient}>
            {/* Then we wrap our components with the provider */}
            <StoreProvider>
              <Component {...pageProps} />
            </StoreProvider>
          </ApolloProvider>
        </Container>
    )
  }
}

export default withApolloClient(MyApp)