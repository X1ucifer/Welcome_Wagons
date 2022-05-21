const getLocationCoordinates = async (req, res) => {
  const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${req.body.location}.json?access_token=pk.eyJ1IjoiMXVjaWZlciIsImEiOiJjbDNnNHJ5MjgwYzZmM2NxN2F4dHMwb25uIn0.ih7w8o1xW-Uv2D0i9li9Pg`

  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()

    res.status(200).send({ message: 'success', data: data.features[0].center })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getLocationCoordinates
