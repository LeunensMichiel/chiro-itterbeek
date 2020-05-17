import React, { useState } from "react"
import { useColorMode } from "theme-ui"
import ReactMapGL, { Marker, FullscreenControl } from "react-map-gl"

import { MapWrapper } from "./contactStyles"
import "mapbox-gl/dist/mapbox-gl.css"

export const Map = () => {
  const [colorMode] = useColorMode()
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: 50.831854,
    longitude: 4.234065,
    zoom: 16,
  })
  return (
    <MapWrapper>
      <ReactMapGL
        {...viewport}
        mapStyle={
          colorMode === "default"
            ? "mapbox://styles/michielleunens/ckabdvj7q2c7v1hqh2m8wvvdg"
            : "mapbox://styles/michielleunens/ckabh25rd5dw51jo257loqsdv"
        }
        onViewportChange={nextViewport => setViewport(nextViewport)}
      />
      <div style={{ position: "absolute", right: 12, top: 12 }}>
        <FullscreenControl />
      </div>
      {/* <Marker latitude={50.831854} longitude={4.234065}>
        <div>You are here</div>
      </Marker> */}
    </MapWrapper>
  )
}
