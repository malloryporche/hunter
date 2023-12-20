'use client'

import React, { useState, useEffect, useMemo } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow } from '@react-google-maps/api';


function Map({ center, containerStyle }) {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState('');

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_KEY,
    libraries: ['places']
  });

  useEffect(() => {
    // getMarkers();
  }, []);

  useEffect(() => {
    const onLoad = (map) => {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    };

      return (map) => {
        setMap(null);
      };

  }, [ center]);

  // const onLoad = useCallback((map) => {

  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map)
  // }, []);

  // const onUnmount = useCallback((map) => {
  //   setMap(null)
  // }, []);

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
      <MarkerF
        name={'Current location'}
        position={center}
      />
        <></>
      </GoogleMap>
  ) : (
  <>
    <p>Loading...</p>
  </>
  )
}

export default React.memo(Map)
