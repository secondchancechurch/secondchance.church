import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

/* First we will make a new context */
const StoreContext = React.createContext()

/* Then create a provider Component */
class StoreProvider extends Component {
  state = {
    isLive: true,
    nextLive: null
  }

  render () {
    return (
      <Query
        query={gql`{
          churchOnline {
            isLive
            nextLive
          }
        }`}
        pollInterval={60000}
      >
        {({ loading, error, data }) => {
          if (loading) return null
          if (error) return null

          console.log(data)

          return (
            <StoreContext.Provider
              value={{
                isLive: data.churchOnline.isLive,
                nextLive: data.churchOnline.nextLive
              }}
            >
              {this.props.children}
            </StoreContext.Provider>
          )
        }}

      </Query>
    )
  }
}

/* then make a consumer which will surface it */
const StoreConsumer = StoreContext.Consumer

export { StoreProvider, StoreConsumer }