import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import AboutUs from './containers/AboutUs/AboutUs';
import Contact from './containers/Contact/Contact';
import Gallery from './components/Gallery/Gallery';

import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/home" component={HomePage} />

            <Route path="/kuhinje" exact render={

              () => <Gallery name="Kuhinje po meri" 
              desc="Kuhinje po meri su okosnica naše celokupne proizvodnje i jedan od najvećih ponosa naše dizajnerske i proizvodne ekipe.
              Kupovina gotovih kuhinjskih elemenata je stvar prošlosti.
              
              Moderno doba i nova arhitektonska i estetska rešenja u stambenim i drugim prostorima, danas zahtevaju mnogo veći obim dinamike i prilagođavanja svim tipovima prostora.
              
              Masovna izgradnja stambenih celina čini da se one u velikoj meri grade prema šablonu, u kome se sve stvari uklapaju u jedno te isto sivilo.
              
              Ono što Vi možete učiniti da biste Vaš dom učinili funkcionalnijim i da biste omogucili da se ističe u odnosu na druge, jeste izrada moderne i unikatne kuhinje po meri."
              url="http://www.crvenajabuka.co.rs/wp-content/uploads/2014/06/kuhinje-po-meri-primer-final.jpg" alt="kuhinje"
              />

            } />

            <Route path="/" exact component={HomePage} />

          </Switch>

        </Layout>
      </div>
    );
  }
}

export default App;
