import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {appIcons} from '../../assets';
import {colors} from '../../utils';
import mapStyle from './mapStyle.json';
import CustomText from '../../components/CustomText';
import appStyles from '../../screens/appStyles';

const Map = ({cord, onMarkerPress, mark}) => {
  console.log(onMarkerPress, 'markereee');

  const markers = [
    {
      latitude: 40.7128,
      longitude: 74.006,
      icon: appIcons.marker,
      subicon: appIcons.Pizza,
      StoreName: 'Levis',
    },
    {
      latitude: 32.7767,
      longitude: 96.797,
      icon: appIcons.marker,
      subicon: appIcons.levis,
      StoreName: 'Addidas',
    },
    {
      latitude: 52.3555,
      longitude: 91.1743,
      icon: appIcons.marker,
      subicon: appIcons.addidas,
      StoreName: 'Addidas',
    },
  ];
  return (
    <MapView
      //   initialRegion={{
      //     latitude: parseFloat(cord?.latitude),
      //     longitude: parseFloat(cord?.longitude),
      //     latitudeDelta: 40.7128,
      //     longitudeDelta: 40.7128,
      //   }}
      region={{
        latitude: parseFloat(cord?.latitude || 0),
        longitude: parseFloat(cord?.longitude || 0),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      provider={PROVIDER_GOOGLE}
      zoomEnabled
      customMapStyle={mapStyle}
      style={{width: '100%', height: '100%'}}>
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          onPress={() => onMarkerPress(marker.latitude, marker.longitude)}>
          {/* <TouchableOpacity onPress={'he;lll'}> */}
          <View
            style={{
              // height:500,
              // width:500,
              // justifyContent: 'center',
              // alignItems: 'center',
              // position: 'absolute',
              // backgroundColor: 'red',
            }}>
            <Image
              source={marker.icon}
              style={{
                resizeMode: 'contain',

                // tintColor: 'black',
                width: 70,
                height: 70,
                // alignItems: 'center',
                // paddingTop: 7,
                // tintColor: colors.black,
                // resizeMode: 'contain',
              }}
            />
              <CustomText text={marker.StoreName} style={{color:colors.gray,alignSelf:'center',...appStyles.family_Montserrat_Bold}} />
            {/* <Image
              source={marker.subicon}
              style={{
                position: 'absolute',
                width: 50,
                // backgroundColor:'red',
                // borderRadius: 50,
                // height: 50,
                // top: 0.5,
                resizeMode: 'contain',
              }}
            /> */}

          </View>
          {/* </TouchableOpacity> */}
        </Marker>
      ))}
    </MapView>
  );
};
export default Map;
