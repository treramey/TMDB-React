import React from 'react';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import { directive } from '@babel/types';


const App = () => {
    return (
        <div>
            <Header />
            <Home/>
        </div>
    )
}

export default App;