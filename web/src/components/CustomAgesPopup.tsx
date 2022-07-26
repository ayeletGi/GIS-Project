import { FC } from "react";
import { Popup } from "react-leaflet";
import "../styles/Popup.css";

type CustomPopupProps = {
  Pop_Total: number;
  Male_Total: number;
  Female_Total: number;
};

const CustomAgesPopup: FC<CustomPopupProps> = ({
  Pop_Total,
  Male_Total,
  Female_Total,
}) => {
  return (
    <Popup className="popup-container">
      <p>גודל האוכלוסיה: {Pop_Total}</p>
      <p>גברים: {Male_Total}</p>
      <p>נשים: {Female_Total}</p>
    </Popup>
  );
};

export default CustomAgesPopup;
