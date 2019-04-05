import React from 'react';
import { InfoContainer, Number, InfoText, Divider, Phone } from './BusinessStyles';

export class InfoSection extends React.Component {
  render() {
    return (
      <InfoContainer>
        <InfoText>{this.props.address}</InfoText>
        <InfoText>{this.props.city}</InfoText>
        <InfoText>{this.props.zip}</InfoText>
        <Divider />
        <Phone>{this.props.phone}</Phone>
      </InfoContainer>
  )
}
};

export default InfoSection;
