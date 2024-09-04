import React from 'react';
import NavBar from './Components/Layout/NavBar';
import Hero from './Components/Layout/Hero';
import Footer from './Components/Layout/Footer';
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
