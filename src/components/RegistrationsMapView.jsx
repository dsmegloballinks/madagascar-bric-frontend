// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useRef, useCallback, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const markers = [
  {
    markerOffset: -15,
    name: "Buenos Aires",
    coordinates: [-19.002846, 46.460938],
  },
  // { markerOffset: -15, name: "La Paz", coordinates: [18.7669, 46.8691] },
  { markerOffset: 25, name: "Brasilia", coordinates: [-13.203681, 49.662342] },
  { markerOffset: 25, name: "Santiago", coordinates: [-21.0, 48.150002] },
  { markerOffset: 25, name: "Bogota", coordinates: [-16.916668, 47.716667] },
  // { markerOffset: -15, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  // { markerOffset: -15, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  // { markerOffset: 25, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  // { markerOffset: 25, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  // { markerOffset: -15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  // { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464] },
];

function RegistrationsMapView(props) {
  const mapRef = useRef(null);

  const center = { lat: -19.002846, lng: 46.460938 };
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div>
      <div style={{ fontSize: "18px", fontWeight: "600", marginTop: "1em" }}>Field Activites</div>
      <GoogleMap
        // mapContainerStyle={"map-container"}
        mapContainerClassName="map-container"
        center={center}
        zoom={5.2}
        // onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {markers.map((item, index) => (
          <Marker
            id={index + 1}
            name={item.name}
            position={{ lat: item.coordinates[0], lng: item.coordinates[1] }}
          />
        ))}
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
          />
        ))}

        <InfoWindow>
          <div>
            <h1>{"this.state.selectedPlace.name"}</h1>
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
