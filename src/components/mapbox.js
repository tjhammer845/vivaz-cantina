import React, { useState } from "react"
import ReactMapGl from "react-map-gl"

export default function Map() {
  let [viewport, setViewport] = useState({
    latitude: 41.308189,
    longitude: -72.933937,
    zoom: 14,
    width: `100%`,
    height: `200px`,
  })
  return (
    <ReactMapGl
      mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
      {...viewport}
      onViewportChange={newView => setViewport(newView)}
    ></ReactMapGl>
  )
}
