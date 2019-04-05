import React, { Component } from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../Util/Yelp';
import {AppWrapper, LandingSectionWrapper, Circle} from './AppStyles';
import GlobalStyle from '../../theme/globalStyle';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({ businesses: businesses });
    });
  }

  render() {
    return (
      <React.Fragment>
      <GlobalStyle />
      <AppWrapper>
        <LandingSectionWrapper>
        <Circle />
        <h1>forager</h1>
        <SearchBar searchYelp={this.searchYelp} />
        </LandingSectionWrapper>
        <BusinessList businesses={this.state.businesses} />
        <Footer />
      </AppWrapper>
      </React.Fragment>
    );
  }
}

export default App;
