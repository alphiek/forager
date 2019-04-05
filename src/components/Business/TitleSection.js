import React from 'react';
import { TitleWrapper, NameContainer, PriceContainer, NumberWhite, } from './BusinessStyles';

export class TitleSection extends React.Component {
  render() {
    return (
    <TitleWrapper>
      <NameContainer>
        <h2>{this.props.name}</h2>
      </NameContainer>
      <PriceContainer>
        <NumberWhite>{this.props.price}</NumberWhite>
      </PriceContainer>
    </TitleWrapper>
  )
}
};

export default TitleSection;
