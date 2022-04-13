import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Reservas from './pages/Reservas/index'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/reservas" exact component={Reservas} />
      </BrowserRouter>
    </Provider>
  )
}
