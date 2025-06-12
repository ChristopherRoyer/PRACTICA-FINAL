import React from 'react';
import Header from './componentes/header';
import Navbar from './componentes/menuvar';
import MainContent from './componentes/maincontent';
import Footer from './componentes/footer';
import './styles/main.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    );
};

export default App;