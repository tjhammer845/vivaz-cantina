import React, { useState, useRef, useEffect } from "react"
import "mapbox-gl/dist/mapbox-gl.css"
import Icon from "../images/vivaz-sun-icon.png"
import styled from "styled-components"
import mapboxgl from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax
import { breakpoints } from "../utils/breakpoints"
import { variables } from "../utils/variables"

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_TOKEN

export default function Map() {
  const [state, setState] = useState({
    lat: 41.308189,
    lng: -72.933937,
    zoom: 18,
  })
  const style = {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    borderBottom: `solid`,
    borderWidth: `0.5rem`,
    borderColor: variables.transOrange,
  }
  const vivazLocation = [state.lng, state.lat]
  const mapContainer = useRef("")
  const map = useRef(null)

  useEffect(() => {
    // note how i set the map ref over here
    map.current = new mapboxgl.Map({
      // i also use the mapContainer ref to set the mapbox container option
      container: mapContainer.current,
      style: "mapbox://styles/tjhammer845/ckouftz8h0i6g17pffh868hwc",
      center: vivazLocation,
      zoom: state.zoom,
    })
    map.current.on("load", function () {
      // Load an image from an external URL.
      map.current.loadImage(Icon, function (error, image) {
        if (error) throw error

        // Add the image to the map style.
        map.current.addImage("pin", image)

        // Add a data source containing one point feature.
        map.current.addSource("point", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: vivazLocation,
                },
              },
            ],
          },
        })

        // Add a layer to use the image to represent the data.
        map.current.addLayer({
          id: "points",
          type: "symbol",
          source: "point", // reference the data source
          layout: {
            "icon-image": "pin", // reference the image
            "icon-size": 0.45,
          },
        })
      })
    })
  }, [])

  return (
    <ReactMapContainer>
      <div style={style} ref={el => (mapContainer.current = el)} />
    </ReactMapContainer>
  )
}
const ReactMapContainer = styled.div`
  height: 300px;
  @media ${breakpoints.md} {
    height: 350px;
  }
  @media ${breakpoints.lg} {
    width: 100%;
    height: 450px;
  }
`
