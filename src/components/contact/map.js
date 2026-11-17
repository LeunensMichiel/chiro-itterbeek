import React, { useContext } from "react"
import { useColorMode } from "theme-ui"
import MapGL, { Marker, FullscreenControl } from "react-map-gl/mapbox"
import { GenderContext } from "../../context/GenderContext"

import { MapWrapper } from "./contactStyles"

const LIGHT_STYLE = "mapbox://styles/michielleunens/ckabdvj7q2c7v1hqh2m8wvvdg"
const DARK_STYLE = "mapbox://styles/michielleunens/ckabh25rd5dw51jo257loqsdv"

const Map = () => {
  const [colorMode] = useColorMode()
  const { genderState } = useContext(GenderContext)

  return (
    <MapWrapper gender={genderState.gender}>
      <MapGL
        // mapbox-gl itself is loaded lazily by react-map-gl (client only)
        mapboxAccessToken={process.env.GATSBY_TOKEN_MAPBOX}
        initialViewState={{
          latitude: 50.830913,
          longitude: 4.234039,
          zoom: 15,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={colorMode === "dark" ? DARK_STYLE : LIGHT_STYLE}
      >
        <FullscreenControl
          position="top-right"
          style={{ margin: "12px 12px 0 0" }}
        />
        <Marker
          latitude={50.831854}
          longitude={4.234065}
          anchor="top-left"
          offset={[-30, 10]}
        >
          <div className="map__marker" />
        </Marker>
      </MapGL>
    </MapWrapper>
  )
}

export default Map
