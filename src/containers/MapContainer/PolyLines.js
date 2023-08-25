import React from 'react';
import {Polyline} from 'react-native-maps';
import {colors} from '../../utils';

const MapPolyLines = ({start, end}) => {
  return (
    <Polyline
      coordinates={[start, end]}
      strokeWidth={4}
      strokeColor={colors.darkGray}
      lineDashPattern={[5, 5, 5, 5, 5]}
    />
  );
};
export default MapPolyLines;
