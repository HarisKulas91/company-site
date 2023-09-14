/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Service from 'parts/Service';
import Advantage from 'parts/Advantage';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import AllTeam from 'parts/AllTeam';
import Data from 'json/landingPage.json';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero {...this.props} />
        <Service data={Data.service} />
        <AllTeam data={Data.team} />
        <Advantage data={Data.advantage} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
