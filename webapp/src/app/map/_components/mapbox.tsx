import Map from 'react-map-gl';

const Mapbox = () => {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: 123.700163,
        latitude: 13.122066,
        zoom: 9.41,
        bearing: -38.40,
        pitch: 75
      }}
      style={{ width: '100%', height: '100vh' }}
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
    />
  );
};

export default Mapbox;
