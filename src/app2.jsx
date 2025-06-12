import React from 'react';
import Header from './componentes/header';
import Navbar from './componentes/menuvar';
import OfertasContent from './componentes/ofertascontent';
import Footer from './componentes/footer';
import './componentes/ofertascontent.css'


const App = () => {
    return (
        <div className="app">
            <Header />
            <Navbar />
            <OfertasContent />
            <Footer />
        </div>
    );
};

export default App;