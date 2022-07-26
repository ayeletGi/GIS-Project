import { LatLngExpression } from "leaflet";
import { FC } from "react";
import { Polygon } from "react-leaflet";

type CustomPolygonProps = {
  geometry: number[][];
};

const LatlonToLonlat = (polygon: number[][]) => {
  return polygon.map((point) => [point[1], point[0]]);
};

const CustomPolygon: FC<CustomPolygonProps> = ({ geometry }) => {
  const pathOptions = { color: "purple", fillColor: "transparent" };
  const multiPolygon = LatlonToLonlat(geometry) as LatLngExpression[];
  return <Polygon pathOptions={pathOptions} positions={multiPolygon} />;
};

export default CustomPolygon;
