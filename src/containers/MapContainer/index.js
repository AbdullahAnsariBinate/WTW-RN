import React, {useRef, useState} from 'react';
import {View, Image, ImageBackground, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, Polygon} from 'react-native-maps';
import {appIcons, appImages} from '../../assets';
import mapStyle from '../Map/mapStyle.json';
// import styles from './styles';
import MapPolyLines from './PolyLines';
import {useTheme} from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import makeStyles from './styles';
const MapContainer = ({
  custom,
  Available,
  children,
  customViewStyle,
  currentRegion = {
    latitude: 37.78815,
    longitude: -122.4324,
  },
  showCurrentPositionMarker = false,
  currentPosition = {
    latitude: 37.78815,
    longitude: -122.4324,
  },
  startHunt,
  EndPoint,
  imageOverlay, // New prop for the image overlay
  markLocation,
  pitchEnabled,
  rotateEnabled,
  zoomEnabled,
  scrollEnabled,
}) => {
  const mapRef = useRef(null);
  const {colors} = useTheme();
  const styles = makeStyles(colors) || [];
  const directions = [
    {
      title: 'John',
      coordinates: {
        latitude: 37.78815,
        longitude: -122.4324,
      },
      icon: appImages.user3,
    },
    {
      title: 'Simth',
      coordinates: {
        latitude: 37.7585,
        longitude: -122.44,
      },
      icon: appImages.user6,
    },
    {
      title: 'Andy',
      coordinates: {
        latitude: 37.775,
        longitude: -122.41,
      },
      icon: appImages.user2,
    },
  ];
  const polygonCoordinates = [
    {latitude: 37.8025259, longitude: -122.4351431},
    {latitude: 37.7896386, longitude: -122.421646},
    {latitude: 37.7665248, longitude: -122.4161628},
    {latitude: 37.7734153, longitude: -122.4577787},
  ];
  EndPointCoordinate = {
    latitude: 37.7995,
    longitude: -122.41,
  };
  return (
    <MapView
      region={{
        latitude: currentRegion?.latitude,
        longitude: currentRegion?.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      pitchEnabled={pitchEnabled}
      rotateEnabled={rotateEnabled}
      zoomEnabled={zoomEnabled}
      scrollEnabled={scrollEnabled}
      provider={PROVIDER_GOOGLE}
      style={[styles.mapView, customViewStyle]}
      customMapStyle={mapStyle}
      ref={mapRef}>
      {custom && (
        <Polygon
          coordinates={polygonCoordinates}
          fillColor="rgba(196, 217, 233, 0.8)"
          strokeColor="rgba(196, 217, 233, 0.9)"
          strokeWidth={2}
        />
      )}

      {Available && (
        <Marker
          coordinate={{
            latitude: EndPointCoordinate?.latitude,
            longitude: EndPointCoordinate?.longitude,
          }}>
          {/* <ImageBackground
            resizeMode="contain"
            style={[styles.bgImage1]}
            source={appImages.mapImage}> */}
          <View style={[styles.bgImage1]}>
            <CustomText
              style={styles.locationText}
              text={'Beechcraft RD, Wasilla'}
            />
            <View style={styles.currentPositionView}>
              <Image
                source={appIcons.mapMarker}
                style={styles.markerPin}
                resizeMode="contain"
              />
            </View>
            <CustomText style={styles.text} text={'Available'} />
          </View>
          {/* </ImageBackground> */}
        </Marker>
      )}

      {/* Show polyLine use MapPolyLine */}
      {EndPoint && (
        <MapPolyLines
          start={{
            latitude: currentPosition?.latitude,
            longitude: currentPosition?.longitude,
          }}
          end={{
            latitude: EndPointCoordinate.latitude,
            longitude: EndPointCoordinate.longitude,
          }}
        />
      )}
      {/* Show polyLine use MapPolyLine End */}

      {/* Destination Point Marker */}
      {EndPoint && (
        <Marker
          coordinate={{
            latitude: EndPointCoordinate?.latitude,
            longitude: EndPointCoordinate?.longitude,
          }}>
          <View style={styles.currentPositionView}>
            <Image
              source={appIcons.mapMarker}
              style={styles.markerPin}
              resizeMode="contain"
            />
          </View>
        </Marker>
      )}
      {/* Destination Point Marker End */}

      {/* Starting Point Marker */}
      {showCurrentPositionMarker && (
        <Marker
          coordinate={{
            latitude: currentPosition?.latitude,
            longitude: currentPosition?.longitude,
          }}>
          <View style={styles.currentPositionView}>
            <Image
              source={appIcons.startingPoint}
              style={styles.markerPin}
              resizeMode="contain"
            />
          </View>
        </Marker>
      )}
      {/* Starting Point Marker End */}

      {/* Start hunt Background pentagon background */}
      {startHunt && (
        <View style={styles.viewhunt}>
          {/* <ImageBackground
            resizeMode={'contain'}
            style={styles.pentagon}
            source={appImages.pentagon}> */}
          {directions.map((marker, index) => {
            return (
              <Marker coordinate={marker.coordinates} key={index}>
                <View style={{alignItems: 'center'}}>
                  <Text style={[styles.title]}>{marker?.title}</Text>
                  <View style={styles.userIconImage}>
                    <Image
                      source={marker?.icon}
                      style={styles.markerPinImage}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.line}></View>
                </View>
              </Marker>
            );
          })}
          {/* </ImageBackground> */}
        </View>
      )}
      {/* Start hunt Background pentagon background End */}

      {/* Mark Location  */}
      {markLocation && (
        <Marker
          coordinate={{
            latitude: currentPosition?.latitude,
            longitude: currentPosition?.longitude,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={[styles.title, {color: colors?.background}]}>
              {'Beenchcraft Rd, Wasilla'}
            </Text>
            <View style={styles.userIconImage}>
              <Image
                source={appIcons?.circle}
                style={styles.markerPinImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.line}></View>
          </View>
        </Marker>
      )}
      {/* Mark Location End */}
      {children}
    </MapView>
  );
};

export default MapContainer;
