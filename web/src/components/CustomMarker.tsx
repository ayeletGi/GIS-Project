import { Icon, LatLngExpression, PointExpression } from "leaflet";
import { FC } from "react";
import { Marker, Tooltip } from "react-leaflet";
import { getImageUrl } from "../icons/icons-service";
import CustomPopup from "./CustomPopup";

type CustomMarkerProps = {
  id: number;
  name: string;
  info: string;
  category: string;
  street: string;
  propose: string;
  cords: number[] | undefined;
};

const CustomMarker: FC<CustomMarkerProps> = ({
  name,
  category,
  street,
  propose,
  cords,
}) => {
  const iconSize: PointExpression = [10, 10];
  const position = cords as LatLngExpression;
  const icon = new Icon({
    iconUrl: getImageUrl(category),
    iconSize: iconSize,
  });

  return cords ? (
    <Marker position={position} icon={icon}>
      <CustomPopup
        storeName={name}
        storePropose={propose}
        storeStreet={street}
      />
      <Tooltip>{category}</Tooltip>
    </Marker>
  ) : (
    <></>
  );
};

export default CustomMarker;
