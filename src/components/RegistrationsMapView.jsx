// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useRef, useCallback, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";

function RegistrationsMapView({ mapList }) {
  const { t, i18n } = useTranslation();
  const lat =
    mapList.length > 0 ? parseFloat(mapList[0].longitude) : -19.002846;
  const lng = mapList.length > 0 ? parseFloat(mapList[0].lattitude) : 46.460938;
  const center = { lat, lng };

  const [map, setMap] = useState(null);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div>
      <div
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "1em",
          textTransform: "capitalize",
        }}
      >
        {t("field_acivity")}
      </div>
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={5.2}
        onUnmount={onUnmount}
      >
        {mapList.map((item, index) => {
          console.log("i", parseFloat(item.longitude));
          return (
            <Marker
              id={index + 1}
              name={item.given_name}
              position={{
                lat: parseFloat(item.longitude),
                lng: parseFloat(item.lattitude),
              }}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
}
export default RegistrationsMapView;
