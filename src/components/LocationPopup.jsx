import { AlertCircle, X } from "react-feather";
import { useRef, useCallback, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";

export default function LocationPopup({ onClose, locationData }) {
  const { t, i18n } = useTranslation();
  const [map, setMap] = useState(null);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const lat = locationData ? parseFloat(locationData[0].longitude) : -19.002846;
  const lng = locationData ? parseFloat(locationData[0].lattitude) : 46.460938;
  const center = { lat, lng };

  return (
    <div className="popup">
      <div className="popup__overlay">
        <div className="popup__overlay__card" style={{ maxWidth: "900px" }}>
          <button
            onClick={() => onClose(false)}
            className="popup__overlay__card__close"
          >
            <X size={20} color="white" />
          </button>

          <div className="certificate__wrapper__container__content">
            {locationData &&
              locationData[0].childData.first_name +
                " " +
                locationData[0].childData.last_name}
          </div>
          <div className="location__info__container">
            <div className="location__info__wrapper">
              <div className="location__info__title">{t("district")}</div>
              <div className="location__info__content">
                {locationData && locationData[0].childData.district_name}
              </div>
            </div>
            <div className="location__info__wrapper">
              <div className="location__info__title">{t("region")}</div>
              <div className="location__info__content">
                {locationData && locationData[0].childData.region_name}
              </div>
            </div>
            <div className="location__info__wrapper">
              <div className="location__info__title">{t("commune")}</div>
              <div className="location__info__content">
                {locationData && locationData[0].childData.commune_name}
              </div>
            </div>
            <div className="location__info__wrapper">
              <div className="location__info__title">{t("fokontany")}</div>
              <div className="location__info__content">
                {locationData && locationData[0].childData.fokontonay_name}
              </div>
            </div>
          </div>
          <div
            className="certificate__wrapper__container "
            style={{ margin: "0em 0em" }}
          >
            <GoogleMap
              // mapContainerStyle={"map-container"}
              mapContainerClassName="map-container"
              center={center}
              zoom={5.2}
              // onLoad={onLoad}
              onUnmount={onUnmount}
            >
              {/* Child components, such as markers, info windows, etc. */}
              {locationData.map((item, index) => {
                console.log("i", parseFloat(item.longitude));
                return (
                  <Marker
                    id={1}
                    name={item.name}
                    position={{
                      lat: parseFloat(item.longitude),
                      lng: parseFloat(item.lattitude),
                    }}
                    // name={item.name}
                    // position={{ lat: item.coordinates[0], lng: item.coordinates[1] }}
                  />
                );
              })}
            </GoogleMap>
          </div>
        </div>
      </div>
    </div>
  );
}
