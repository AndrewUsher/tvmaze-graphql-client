import * as React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import { CssBaseline } from '@material-ui/core'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const client = new ApolloClient({ uri: 'http://localhost:4000' })

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <CssBaseline />
      <Header />
      <Switch>
        <Route path="/" component={Search} />
      </Switch>
    </ApolloProvider>
  </BrowserRouter>
)

export {
  App
}
