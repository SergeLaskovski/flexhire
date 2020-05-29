import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import '@/scss/App.scss';
import {IconContext} from 'react-icons';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainPage from '@/pages/MainPage';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

//get data for main menu
import mainSections from '@/data/mainSections';

function App() {
  return (
    <IconContext.Provider value={{className: 'global-icons'}}>
      <Router>
        <Header />
        <Switch>
          {/*mainSections.map((subComponent) => (
            <Route path={`/${subComponent.slug}`}>
              <SubMenu subSec={subComponent.slug} />
            </Route>
          ))*/}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </IconContext.Provider>
  );
}

export default App;
