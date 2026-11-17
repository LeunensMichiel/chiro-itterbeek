"use client"

import "mapbox-gl/dist/mapbox-gl.css"

import MapGL, { FullscreenControl, Marker } from "react-map-gl/mapbox"

import { useColorMode } from "@/lib/use-preferences"

const LIGHT_STYLE = "mapbox://styles/michielleunens/ckabdvj7q2c7v1hqh2m8wvvdg"
const DARK_STYLE = "mapbox://styles/michielleunens/ckabh25rd5dw51jo257loqsdv"

/** Map of the chiro grounds; client-only (loaded by ./map-loader). */
export default function ContactMap() {
  const colorMode = useColorMode()

  return (
    <MapGL
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{ latitude: 50.830913, longitude: 4.234039, zoom: 15 }}
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
        <div className="block size-6 rounded-full! border-4 border-solid border-chiro-light bg-chiro" />
      </Marker>
    </MapGL>
  )
}
