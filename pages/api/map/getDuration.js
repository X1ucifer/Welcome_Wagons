const getDuration = async (req, res) => {
  // const mapboxUrl = `https://api.mapbox.com/directions/v5/
  // /${req.body.pickupCoordinates};${req.body.dropoffCoordinates}.json?access_token=pk.eyJ1IjoiMXVjaWZlciIsImEiOiJjbDJrb2Nob2wxOXEwM2xxaGF5Z2g0MzdzIn0.cpWGlgHXptLcBFsgy_k9vA`

  const mapboxUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${req.body.pickupCoordinates};${req.body.dropoffCoordinates}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1IjoiMXVjaWZlciIsImEiOiJjbDJrb2Nob2wxOXEwM2xxaGF5Z2g0MzdzIn0.cpWGlgHXptLcBFsgy_k9vA`

  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()
    console.log("price", data)
    res.status(200).send({ message: 'success', data: data.routes[0].duration })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getDuration
