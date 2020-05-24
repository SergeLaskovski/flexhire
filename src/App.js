import React from 'react';
import './scss/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
