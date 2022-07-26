import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useStateMachine } from "little-state-machine";
import { LatLngExpression } from "leaflet";
import { storesData } from "../jsons/tel-aviv-json";
import { agesData } from "../jsons/tel-aviv-ages-stats";
import { CustomLegend } from "./CustomLegend";
import CustomMarker from "./CustomMarker";
import CustomPolygon from "./CustomPolygon";

const MapComponent: FC = () => {
  const telAvivCenter: LatLngExpression = [32.079333, 34.784499];
  const zoomLevel = 14;
  const { state } = useStateMachine();

  return (
    <MapContainer
      center={telAvivCenter}
      zoom={zoomLevel}
      scrollWheelZoom={false}
    >
      {/* background map */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* stores markers */}
      {storesData.map(
        (storeRow) =>
          state.chosenCategories[storeRow.category] && (
            <CustomMarker key={storeRow.id} {...storeRow} />
          )
      )}

      {/* stat area polygons */}
      {agesData.map((areaRow) => (
        <CustomPolygon key={areaRow.OBJECTID} {...areaRow} />
      ))}

      <CustomLegend />
    </MapContainer>
  );
};

export default MapComponent;
