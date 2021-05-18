import React from "react"
import Icon from "../images/vivaz-sun-icon.png"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import styled from "styled-components"

class Map extends React.Component {
  createMap() {
    const zoom = 15
    const iconSize = 0.45
    const coordinates = [41.308343, -72.933822]
    const map = new mapboxgl.Map({
      center: coordinates,
      container: "map",
      style: "mapbox://styles/mapbox/streets-v9",
      zoom: zoom,
    })
    map.scrollZoom.disable()

    map.on("load", () => {
      map.loadImage(Icon, (error, image) => {
        if (error) {
          throw error
        }
        map.addImage("pin", image)
        map.addLayer({
          id: "points",
          layout: {
            "icon-image": "pin",
            "icon-size": iconSize,
          },
          source: {
            data: {
              features: [
                {
                  geometry: {
                    coordinates: coordinates,
                    type: "Point",
                  },
                  type: "Feature",
                },
              ],
              type: "FeatureCollection",
            },
            type: "geojson",
          },
          type: "symbol",
        })
      })
    })
  }

  componentDidMount() {
    mapboxgl.accessToken = process.env.GATSBY_MAPBOX_TOKEN
    this.createMap()
  }
  render() {
    return (
      <ReactMapContainer>
        <div id={"map"} style={{ width: "100%", height: 400 }} />
      </ReactMapContainer>
    )
  }
}
const ReactMapContainer = styled.div`
  width: 100%;
  height: 450px;
  div {
    width: "100%", height: 400
  }
`
export default Map
