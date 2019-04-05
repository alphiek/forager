import React from 'react';
import { BusinessItem, InfoWrapper, ReviewRead, Number, ReviewsWrapper, Subheading, ReviewContainer, Circles, CirclesContainer } from './BusinessStyles';
import YelpLogo from '../Assets/yelplogo';
import { TitleSection } from './TitleSection';
import { ImageSection } from './ImageSection';
import { InfoSection } from './InfoSection';

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const url = this.props.business.url;
    window.open(url, "_blank");
  }


  render () {
    return (
    <BusinessItem>
      <TitleSection name={this.props.business.name} price={this.props.business.price}/>
      <InfoWrapper>
        <ImageSection
          src={this.props.business.imageSrc}
          alt={this.props.business.category}
          rating={this.props.business.rating}
          onClick={this.handleClick} />
        <InfoSection
          address={this.props.business.state}
          city={this.props.business.city}
          zip={this.props.business.zipCode}
          phone={this.props.business.phone} />
      </InfoWrapper>
      <div className="Business-information">
      <ReviewsWrapper>
          <ReviewContainer>
            <Subheading>Reviews</Subheading>
            <Number>{this.props.business.reviewCount}</Number>
            </ReviewContainer>
            <CirclesContainer>
            <Circles />
            <Circles />
            <Circles />
            </CirclesContainer>
            <ReviewRead />
        </ReviewsWrapper>
      </div>
   </BusinessItem>
)
}
};

export default Business;
