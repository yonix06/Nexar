import { useState } from 'react';
import { MapProvider } from './MapProvider';

const baseMaps = [
  { value: 'google', label: 'Google Maps' },
  { value: 'ign', label: 'IGN' },
  { value: 'openstreetmap', label: 'OpenStreetMap' },
];

export function BaseLayer() {
  const [selectedMap, setSelectedMap] = useState(baseMaps[0].value);

  return (
    <MapProvider selectedMap={selectedMap}>
      <select
        value={selectedMap}
        onChange={(e) => setSelectedMap(e.target.value)}
      >
        {baseMaps.map((map) => (
          <option key={map.value} value={map.value}>
            {map.label}
          </option>
        ))}
      </select>
    </MapProvider>
  );
}

