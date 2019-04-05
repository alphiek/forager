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
      businesses: [
        {
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        price: '£££',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        phone: '+ 44 0258 53624',
        rating: 4.5,
        reviewCount: 90,
        url: "https://www.yelp.com/biz/gary-danko-san-francisco"
      },
      {
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        price: '£££',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        phone: '+ 44 0258 53624',
        rating: 4.5,
        reviewCount: 90,
        url: "https://www.yelp.com/biz/gary-danko-san-francisco"
    },
    {
      imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      price: '£££',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      phone: '+ 44 0258 53624',
      rating: 4.5,
      reviewCount: 90,
      url: "https://www.yelp.com/biz/gary-danko-san-francisco"
    },
    {
      imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      price: '£££',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      phone: '+ 44 0258 53624',
      rating: 4.5,
      reviewCount: 90,
      url: "https://www.yelp.com/biz/gary-danko-san-francisco"
    },
    {
      imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      price: '£££',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      phone: '+ 44 0258 53624',
      rating: 4.5,
      reviewCount: 90,
      url: "https://www.yelp.com/biz/gary-danko-san-francisco"
    },
    {
      imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      price: '£££',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      phone: '+ 44 0258 53624',
      rating: 4.5,
      reviewCount: 90,
      url: "https://www.yelp.com/biz/gary-danko-san-francisco"
    },
    {
      imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      price: '£££',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      phone: '+ 44 0258 53624',
      rating: 4.5,
      reviewCount: 90,
      url: "https://www.yelp.com/biz/gary-danko-san-francisco"
    },
    {
      imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      price: '£££',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      phone: '+ 44 0258 53624',
      rating: 4.5,
      reviewCount: 90,
      url: "https://www.yelp.com/biz/gary-danko-san-francisco"
    },
      ]
    };
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
