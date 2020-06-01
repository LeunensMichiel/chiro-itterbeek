import React, { useState, useContext } from "react"
import { useColorMode } from "theme-ui"
import ReactMapGL, { Marker, FullscreenControl } from "react-map-gl"
import { GenderContext } from "../../context/GenderContext"

import { MapWrapper } from "./contactStyles"
import "mapbox-gl/dist/mapbox-gl.css"

const Map = () => {
  const [colorMode] = useColorMode()
  const { genderState } = useContext(GenderContext)

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 50.830913,
    longitude: 4.234039,
    zoom: 15,
  })
  return (
    <MapWrapper gender={genderState.gender}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={`${process.env.GATSBY_TOKEN_MAPBOX}`}
        mapStyle={
          colorMode === "default"
            ? "mapbox://styles/michielleunens/ckabdvj7q2c7v1hqh2m8wvvdg"
            : "mapbox://styles/michielleunens/ckabh25rd5dw51jo257loqsdv"
        }
        onViewportChange={nextViewport => setViewport(nextViewport)}
      >
        <div style={{ position: "absolute", right: 12, top: 12 }}>
          <FullscreenControl />
        </div>
        <Marker
          latitude={50.831854}
          longitude={4.234065}
          offsetLeft={-30}
          offsetTop={10}
        >
          <div className="map__marker" />
        </Marker>
      </ReactMapGL>
    </MapWrapper>
  )
}

export default Map
