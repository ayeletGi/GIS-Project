import { LatLngExpression } from "leaflet";
import { useStateMachine } from "little-state-machine";
import { FC, useState } from "react";
import { Polygon, Tooltip } from "react-leaflet";
import { colorByPrecentGroup } from "../icons/icons-service";
import CustomAgesPopup from "./CustomAgesPopup";

type CustomPolygonProps = {
  OBJECTID: number;
  STAT11: number;
  SHEM_YISHUV_ENGLISH: string;
  Pop_Total: number;
  Male_Total: number;
  Female_Total: number;
  age_0_4: number;
  age_5_9: number;
  age_10_14: number;
  age_15_19: number;
  age_20_24: number;
  age_25_29: number;
  age_30_34: number;
  age_35_39: number;
  age_40_44: number;
  age_45_49: number;
  age_50_54: number;
  age_55_59: number;
  age_60_64: number;
  age_65_69: number;
  age_70_74: number;
  age_75_79: number;
  age_80_84: number;
  age_85_up: number;
  Shape_Length: number;
  Shape_Area: number;
  geometry: number[][];
};

const CustomPolygon: FC<CustomPolygonProps> = ({
  STAT11,
  Pop_Total,
  Male_Total,
  Female_Total,
  age_0_4,
  age_5_9,
  age_10_14,
  age_15_19,
  age_20_24,
  age_25_29,
  age_30_34,
  age_35_39,
  age_40_44,
  age_45_49,
  age_50_54,
  age_55_59,
  age_60_64,
  age_65_69,
  age_70_74,
  age_75_79,
  age_80_84,
  age_85_up,
  geometry,
}) => {
  const { state } = useStateMachine();
  const LatlonToLonlat = (polygon: number[][]) => {
    return polygon.map((point) => [point[1], point[0]]);
  };

  const calFillColor = () => {
    let total_ages = 0;
    if (state.chosenAges["0-4"]) total_ages += age_0_4;
    if (state.chosenAges["5-9"]) total_ages += age_5_9;
    if (state.chosenAges["10-14"]) total_ages += age_10_14;
    if (state.chosenAges["15-19"]) total_ages += age_15_19;
    if (state.chosenAges["20-24"]) total_ages += age_20_24;
    if (state.chosenAges["25-29"]) total_ages += age_25_29;
    if (state.chosenAges["30-34"]) total_ages += age_30_34;
    if (state.chosenAges["35-39"]) total_ages += age_35_39;
    if (state.chosenAges["40-44"]) total_ages += age_40_44;
    if (state.chosenAges["45-49"]) total_ages += age_45_49;
    if (state.chosenAges["50-54"]) total_ages += age_50_54;
    if (state.chosenAges["55-59"]) total_ages += age_55_59;
    if (state.chosenAges["60-64"]) total_ages += age_60_64;
    if (state.chosenAges["65-69"]) total_ages += age_65_69;
    if (state.chosenAges["70-74"]) total_ages += age_70_74;
    if (state.chosenAges["75-79"]) total_ages += age_75_79;
    if (state.chosenAges["80-84"]) total_ages += age_80_84;
    if (state.chosenAges["ומעלה 85"]) total_ages += age_85_up;
    const agesPercent = total_ages / Pop_Total;
    return colorByPrecentGroup(agesPercent);
  };

  return (
    <Polygon
      pathOptions={{ color: "purple", fillColor: calFillColor() }}
      positions={LatlonToLonlat(geometry) as LatLngExpression[]}
    >
      <Tooltip>אזור סטיסטי מספר: {STAT11}</Tooltip>
      <CustomAgesPopup
        Pop_Total={Pop_Total}
        Male_Total={Male_Total}
        Female_Total={Female_Total}
      />
    </Polygon>
  );
};

export default CustomPolygon;
