import L from "leaflet";
import { FC, useEffect } from "react";
import { useMap } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { telAvivData } from "../jsons/tel-aviv-json";
import { getCategoriesMap } from "../icons/icons-service";

import "../styles/Legend.css";

export const CustomLegend: FC = () => {
  const mapRef = useMap();

  useEffect(() => {
    // logCategories(telAvivData);
    const CategoriesMap = getCategoriesMap(telAvivData);
    const legend = new L.Control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "legend-container");
      div.innerHTML = renderToStaticMarkup(
        innerLegend(CategoriesMap)
      );
      return div;
    };
    legend.addTo(mapRef);
  }, [mapRef]);

  return null;
};

const innerLegend = (
  CategoriesMap: { [id: string]: string },
) => {
  return (
    <>
      {Object.keys(CategoriesMap).map((key) => (
        <label key={key}>
          <span>{key}</span>
          <img
            src={CategoriesMap[key]}
            alt={key}
          />
        </label>
      ))}
    </>
  );
};
