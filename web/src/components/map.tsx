import { useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import { telAvivData } from "../jsons/tel-aviv-json100";

type TelAvivRow = {
  id: number;
  name: string;
  info: string;
  category: string;
  street: string;
  propose: string;
  cords: number[] | undefined;
};

function Map() {
  const telAvivCenter: LatLngExpression = [32.109333, 34.855499];

  const icon = new Icon({
    iconUrl: "srcdata\rate-rating-survey-31-svgrepo-com.svg",
    iconSize: [25, 25],
  });

  return (
    <MapContainer center={telAvivCenter} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {telAvivData.map((telAvivRow: TelAvivRow) => {
        return telAvivRow.cords ? (
          <Marker
            key={telAvivRow.id}
            position={[telAvivRow.cords[0], telAvivRow.cords[1]]}
            icon={icon}
          />
        ) : (
          <></>
        );
      })}
    </MapContainer>
  );
}

export default Map;
