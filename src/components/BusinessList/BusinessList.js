import React from 'react';
import { BusinessFlex } from './BusinessListStyles';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render () {
    return (
    <BusinessFlex>
    {this.props.businesses.map(business => {
        return <Business business={business}
        key={business.id} />
      })}
    </BusinessFlex>
  );
}
}

export default BusinessList;
