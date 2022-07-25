import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { telAvivData } from "../jsons/tel-aviv-json";
import { CustomLegend } from "./CustomLegend";
import CustomMarker from "./CustomMarker";
import { useStateMachine } from "little-state-machine";

const MapComponent: FC = () => {
  const telAvivCenter: LatLngExpression = [32.079333, 34.784499];
  const zoomLevel = 14;
  const { state, actions } = useStateMachine()
  return (
    <MapContainer
      center={telAvivCenter}
      zoom={zoomLevel}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {telAvivData.map((telAvivRow) => (
        state.chosenCategories[telAvivRow.category]&&
        <CustomMarker key={telAvivRow.id} {...telAvivRow} />
      ))}
      <CustomLegend/>
    </MapContainer>
  );
};

export default MapComponent;
