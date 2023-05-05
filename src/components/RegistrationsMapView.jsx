// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useRef, useCallback, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const markers = [
  {
    markerOffset: -15,
    name: "Buenos Aires",
    coordinates: [-19.002846, 46.460938],
  },
  { markerOffset: 25, name: "Brasilia", coordinates: [-13.203681, 49.662342] },
  { markerOffset: 25, name: "Santiago", coordinates: [-21.0, 48.150002] },
  { markerOffset: 25, name: "Bogota", coordinates: [-16.916668, 47.716667] },
];

function RegistrationsMapView({ mapList }) {
  const mapRef = useRef(null);

  const lat =
    mapList.length > 0 ? parseFloat(mapList[0].lattitude) : -19.002846;
  const lng = mapList.length > 0 ? parseFloat(mapList[0].longitude) : 46.460938;
  const center = { lat, lng };

  const [map, setMap] = useState(null);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  console.log("mapList", mapList);

  return (
    <div>
      <div style={{ fontSize: "18px", fontWeight: "600", marginTop: "1em" }}>
        Field Activites
      </div>
      <GoogleMap
        // mapContainerStyle={"map-container"}
        mapContainerClassName="map-container"
        center={center}
        zoom={5.2}
        // onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {mapList.map((item, index) => {
          return (
            <Marker
              id={index + 1}
              name={item.given_name}
              position={{
                lat: parseFloat(item.lattitude),
                lng: parseFloat(item.longitude),
              }}
              // name={item.name}
              // position={{ lat: item.coordinates[0], lng: item.coordinates[1] }}
            />
          );
        })}
      </GoogleMap>
      {/* <Map
        ref={mapRef}
        id="map"
        google={props.google}
        zoom={5}
        center={new props.google.maps.LatLng(-19.002846, 46.460938)}
        style={{
          width: "1000px",
          margin: "1em 0em",
          borderRadius: "20px",
          height: "500px",
        }}
      >
        {markers.map((item, index) => (
          <Marker
            id={index + 1}
            name={item.name}
            position={{ lat: item.coordinates[0], lng: item.coordinates[1] }}
            // onMouseover={() => setHoverLocation(item)}
            onClick={onMarkerClick}
          />
        ))}

        <InfoWindow
          marker={hoverLocation && hoverLocation.activeMarker}
          visible={hoverLocation && hoverLocation.showingInfoWindow}
        >
          <div>
            <h1>{hoverLocation && hoverLocation.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map> */}
    </div>
  );
}
export default RegistrationsMapView;

// const LoadingContainer = (props) => <div>Fancy loading container!</div>;

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBch80KN8P7agyjoq_R92ApjKohp-1txiQ",
//   LoadingContainer: LoadingContainer,
// })(RegistrationsMapView);
