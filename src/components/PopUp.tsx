"use client"

import React, { useState, useCallback, useEffect } from "react"
import { Box, Typography, Button, CircularProgress, Autocomplete, TextField } from "@mui/material"
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from "react-leaflet"
import { PhotoCamera, Radar, Terrain, Thermostat } from "@mui/icons-material"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Фикс для иконок маркеров Leaflet 
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

interface PopUpProps {
  open: boolean
  onClose: () => void
  selectedRegion: string | null
}

interface SearchResult {
  lat: number
  lon: number
  display_name: string
}

interface SurveyType {
  name: string
  icon: React.ReactElement
}

const MapUpdater: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

const PopUp: React.FC<PopUpProps> = ({ open, onClose, selectedRegion }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [mapCenter, setMapCenter] = useState<[number, number]>([55.751244, 37.618423]) // Москва
  const [mapZoom, setMapZoom] = useState(4)
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState<SearchResult[]>([])
  const [selectedSurveyType, setSelectedSurveyType] = useState<string | null>(null)

  const surveyTypes: SurveyType[] = [
    { name: "Аэрофотосъёмка", icon: <PhotoCamera /> },
    { name: "Воздушно-лазерное сканирование", icon: <Radar /> },
    { name: "Георазведка", icon: <Terrain /> },
    { name: "Тепловизионная съёмка", icon: <Thermostat /> },
  ]

  const handleSearch = useCallback(async (query: string) => {
    if (!query.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&countrycodes=ru`,
      )
      const data = await response.json()
      setOptions(data)
    } catch (error) {
      console.error("Ошибка при поиске:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleSelect = (result: SearchResult | null) => {
    if (result) {
      setSearchResult(result)
      setMapCenter([Number.parseFloat(result.lat), Number.parseFloat(result.lon)])
      setMapZoom(10)
    }
  }

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery)
    } else {
      setOptions([])
    }
  }, [searchQuery, handleSearch])

  if (!open) return null

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1300,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 24,
          width: "98%",
          height: "98%",
          maxWidth: "1800px",
          maxHeight: "1000px",
          display: "flex",
          flexDirection: "row",
          position: "relative",
        }}
      >
        {/* Left Column - 80% with Map */}
        <Box
          sx={{
            width: "80%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRight: "1px solid #e0e0e0",
          }}
        >
          <Box sx={{ p: 2, width: "100%" }}>
            <Autocomplete
              fullWidth
              options={options}
              getOptionLabel={(option) => option.display_name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  placeholder="Поиск города"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
              onInputChange={(_, newInputValue) => {
                setSearchQuery(newInputValue)
              }}
              onChange={(_, newValue) => {
                handleSelect(newValue)
              }}
              filterOptions={(x) => x}
              isOptionEqualToValue={(option, value) => option.display_name === value.display_name}
            />
          </Box>
          <Box sx={{ flexGrow: 1, position: "relative" }}>
            <MapContainer
              center={mapCenter}
              zoom={mapZoom}
              style={{ height: "100%", width: "100%" }}
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MapUpdater center={mapCenter} zoom={mapZoom} />
              {searchResult && (
                <Marker position={[searchResult.lat, searchResult.lon]}>
                  <Popup>{searchResult.display_name}</Popup>
                </Marker>
              )}
              <ZoomControl position="bottomright" />
            </MapContainer>
          </Box>
        </Box>

        {/* Right Column - 20% with 4 selectable survey types */}
        <Box
          sx={{
            width: "20%",
            height: "100%",
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#f5f5f5",
          }}
        >
          {surveyTypes.map((surveyType) => (
            <Box
              key={surveyType.name}
              sx={{
                backgroundColor: selectedSurveyType === surveyType.name ? "hsl(12, 100%, 65%)" : "transparent",
                borderRadius: 2,
                p: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: selectedSurveyType === surveyType.name ? "0 4px 10px rgba(0,0,0,0.1)" : "none",
                "&:hover": {
                  backgroundColor: "hsl(12, 100%, 50%)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                },
              }}
              onClick={() => setSelectedSurveyType(surveyType.name)}
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  border: "2px solid hsl(12, 100%, 65%)",
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {selectedSurveyType === surveyType.name && (
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "#1976d2",
                    }}
                  />
                )}
              </Box>
              {React.cloneElement(surveyType.icon, { sx: { mr: 2, color: "#1976d2" } })}
              <Typography variant="body1">{surveyType.name}</Typography>
            </Box>
          ))}
          <Box sx={{ mt: "auto" }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: "bold", color: "#1976d2" }}>
              {selectedSurveyType ? `Выбран вид съёмки: ${selectedSurveyType}` : "Выберите вид съёмки"}
            </Typography>
            <Button variant="contained" color="primary" onClick={onClose} size="large" fullWidth>
              Купить
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PopUp







