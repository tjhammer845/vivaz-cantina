import React, { useState } from "react"
import ReactMapGl, { Marker } from "react-map-gl"
import Icon from "../images/vivaz-sun-icon.png"
import styled from "styled-components"

export default function Map() {
  let [viewport, setViewport] = useState({
    latitude: 41.308189,
    longitude: -72.933937,
    zoom: 17,
    pitch: 50,
    height: `450px`,
    width: `100%`,
  })
  return (
    <ReactMapContainer>
      <ReactMapGl
        className="mapboxgl-map"
        mapStyle={"mapbox://styles/mapbox/light-v9"}
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_TOKEN}
        {...viewport}
        onViewportChange={newView => setViewport(newView)}
      >
        <Marker
          latitude={41.308189}
          longitude={-72.933937}
          offsetTop={(-viewport.zoom * 5) / 2}
        >
          <img
            src={Icon}
            width={viewport.zoom * 5}
            height={viewport.zoom * 5}
          />
        </Marker>
      </ReactMapGl>
    </ReactMapContainer>
  )
}
const ReactMapContainer = styled.div`
  width: 100%;
  height: 450px;
`
