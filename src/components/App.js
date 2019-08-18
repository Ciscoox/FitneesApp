import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ExcercisesContainer from '../pages/ExcercisesContainer'
import ExcercisesNewContainer from '../pages/ExcercisesNewContainer'
import NotFound from '../pages/404'

const App = () => (
    <Router>
        <Switch>
            <Route path="/exercise" exact component={ExcercisesContainer} />
            <Route path="/exercise/new" exact component={ExcercisesNewContainer} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)


export default App