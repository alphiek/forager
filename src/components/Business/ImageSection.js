import React from 'react';
import { ImageContainer, Thumbnail, RatingYelpWrapper, RatingContainer, Subheading, Number, YelpContainer} from './BusinessStyles';
import YelpLogo from '../Assets/yelplogo';

export class ImageSection extends React.Component {
  render() {
    return (
      <React.Fragment>
      <ImageContainer>
        <Thumbnail src={this.props.src} alt={this.props.alt}/>
      </ImageContainer>
      <RatingYelpWrapper>
        <RatingContainer>
          <Subheading>Rating</Subheading>
          <Number>{this.props.rating}</Number>
        </RatingContainer>
        <YelpContainer onClick={this.props.onClick}>
          <YelpLogo />
        </YelpContainer>
      </RatingYelpWrapper>
      </React.Fragment>
  )
}
};

export default ImageSection;
