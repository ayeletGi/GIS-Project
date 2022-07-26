import L from "leaflet";
import { FC, useEffect } from "react";
import { useMap } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { getCategoriesMap, getPercentageColorsMap } from "../icons/icons-service";
import "../styles/Legend.css";

export const CustomLegend: FC = () => {
  const mapRef = useMap();

  useEffect(() => {
    const CategoriesMap = getCategoriesMap();
    const PercantageMap = getPercentageColorsMap();
    const legend = new L.Control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "legend-container");
      div.innerHTML = renderToStaticMarkup(innerLegend(CategoriesMap, PercantageMap));
      return div;
    };
    legend.addTo(mapRef);
  }, [mapRef]);

  return null;
};

const innerLegend = (CategoriesMap: { [id: string]: string }, PercantageMap: { [id: string]: string }) => {
  return (
    <>
      <div className="legend-row">
        <span>אחוז קבוצת הגילאים מכלל האוכלוסיה:</span>
        {Object.keys(PercantageMap).map((key) => (
          <label key={key}>
            <span style={{ color: PercantageMap[key] }}>{key}</span>
          </label>
        ))}
      </div>
      <div className="legend-row">
        {Object.keys(CategoriesMap).map((key) => (
          <label key={key}>
            <span>{key}</span>
            <img src={CategoriesMap[key]} alt={key} />
          </label>
        ))}
      </div>
    </>
  );
};
