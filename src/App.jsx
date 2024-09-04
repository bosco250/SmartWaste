import React from 'react';
import Hero from './Components/Layout/Hero';
import About from './Components/About/About';
import StatsDisplay from './Components/Statistics/StatsDisplay';

const App = () => {
    return (
        <div>
            <Hero />
            <StatsDisplay/>
            <About/>
        </div>
    );
};

export default App;
