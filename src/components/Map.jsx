import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [207.9, -41, 0],
        center: [-45, -13],
        scale: 1200
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#21014b"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[107.8, 11.9]}
        dx={180}
        dy={30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="80" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Tp.HCM"}
        </text>
      </Annotation>
      <Annotation
        subject={[105.1, 21.5]}
        dx={180}
        dy={30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="80" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Ha Noi"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;