import { useEffect, useRef } from 'react';
import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledGoogleMap = styled.div`
  color: pink;
`;

export function GoogleMap() {
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const map = new google.maps.Map(mapRef.current!, {
      center: { lat: 43.5809, lng: 7.1602 },
      zoom: 12,
    });

    const flightPath = new google.maps.Polygon({
      paths: [
        { lat: 43.5809, lng: 7.1602 },
        { lat: 43.5809, lng: 7.1602 },
        { lat: 43.5809, lng: 7.1602 },
      ],
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
    });
    flightPath.setMap(map);

    mapRef.current = map;
  }, []);

  return (
    <StyledGoogleMap>
      <h1>Welcome to GoogleMap!</h1>

      <ul>
        <li>
          <Link to="/">GoogleMap root</Link>
        </li>
      </ul>
      <Route path="/" element={<div ref={mapRef} />} />
    </StyledGoogleMap>
  );
}

export default GoogleMap;

