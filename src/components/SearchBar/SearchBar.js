import React from 'react';
import './SearchBar.css';
import { SearchBarWrapper, SearchOptionsWrapper, SearchFields, SearchButton, ButtonContainer } from './SearchBarStyles';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      'BEST MATCH': 'best_match',
      'HIGHEST RATED': 'rating',
      'MOST REVIEWED': 'review_count'
    };
  }

 renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
        key={sortByOptionValue}
        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
      {sortByOption}
      </li>);
    });
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  render () {
    return (
    <SearchBarWrapper>
      <SearchOptionsWrapper>
        <ul>
        {this.renderSortByOptions()}
       </ul>
     </SearchOptionsWrapper>
    <SearchFields>
      <input placeholder="Find Businesses" onChange={this.handleTermChange}/>
      <input placeholder="Near Location" onChange={this.handleLocationChange}/>
   </SearchFields>
   <ButtonContainer>
    <SearchButton onClick={this.handleSearch}>Let's Forage</SearchButton>
  </ButtonContainer>
  </SearchBarWrapper>
);
}
}

export default SearchBar;
