import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import AboutUs from './containers/AboutUs/AboutUs';
import Contact from './containers/Contact/Contact';

import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/" exact component={HomePage} />
            <Route path="/kitchen" exact component={AboutUs} />

          </Switch>

        </Layout>
      </div>
    );
  }
}

export default App;
