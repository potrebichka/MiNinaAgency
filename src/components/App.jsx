import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import NotFound from './NotFound'

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default App