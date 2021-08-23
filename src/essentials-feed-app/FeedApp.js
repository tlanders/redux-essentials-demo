import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch,} from 'react-router-dom'

import {Navbar} from './app/Navbar'

import './FeedApp.css'

function App() {
    return (
        <Router>
            <Navbar />
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/feed-app"
                        render={() => (
                            <section>
                                <h2>Welcome to the Redux Essentials example app!</h2>
                            </section>
                        )}
                    />
                    <Redirect to="/feed-app" />
                </Switch>
            </div>
        </Router>
    )
}

export default App