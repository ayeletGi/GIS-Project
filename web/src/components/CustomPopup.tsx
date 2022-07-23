import { FC } from "react";
import { Popup } from "react-leaflet";
import "../styles/Popup.css"

type CustomPopupProps = {
  storeName: string;
  storeStreet: string;
  storePropose: string;
};

const CustomPopup: FC<CustomPopupProps> = ({
  storeName,
  storeStreet,
  storePropose,
}) => {
  return (
    <Popup className="popup-container">
      <p>{storeName}</p>
      <p>{storeStreet}</p>
      <p>{storePropose}</p>
    </Popup>
  );
};

export default CustomPopup;
