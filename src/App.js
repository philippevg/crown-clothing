import React from 'react';
import './App.css';
import { Switch,  Route } from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";

const HastPage = () => (
    <div>
      <h1>Hats</h1>
    </div>
)

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop/hats' component={HastPage} />
            </Switch>
        </div>
    );
}

export default App;
