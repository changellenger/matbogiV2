import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Dashboard from "./Dashboard"



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Dashboard/>
            </div>
        </BrowserRouter>
    );
}

export default App;
