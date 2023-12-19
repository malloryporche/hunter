'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';


function MyMap({ center, containerStyle }) {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCgORHSTeDJOev0dNRaoHKMAoaKnkQc5Ns"
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
      <Marker
        // onClick={onMarkerClick}
        name={'Current location'}
        position={{ lat: -34.397, lng: 150.644 }}
      />
        <></>
      </GoogleMap>
  ) : (
  <>
    <p>Loading...</p>
  </>
  )
}

export default React.memo(MyMap)
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCgORHSTeDJOev0dNRaoHKMAoaKnkQc5Ns"
// })(Map);