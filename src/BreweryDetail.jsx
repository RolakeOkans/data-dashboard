import { useParams, Link } from 'react-router-dom'

const BreweryDetail = ({ breweries }) => {
  const { id } = useParams()
  const brewery = breweries.find(b => b.id === id)

  if (!brewery) {
    return (
      <div className="App">
        <h2>Brewery not found!</h2>
        <Link to="/">← Back to Dashboard</Link>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="detail-header">
        <Link to="/" className="back-link">← Back to Dashboard</Link>
        <h1>🍺 {brewery.name}</h1>
        <span className={`type-badge ${brewery.brewery_type}`}>
          {brewery.brewery_type}
        </span>
      </div>

      <div className="detail-card">
        <div className="detail-grid">
          <div className="detail-item">
            <h4>📍 Location</h4>
            <p>{brewery.street || 'N/A'}</p>
            <p>{brewery.city}, {brewery.state} {brewery.postal_code}</p>
            <p>{brewery.country}</p>
          </div>
          <div className="detail-item">
            <h4>📞 Contact</h4>
            <p>{brewery.phone || 'No phone listed'}</p>
            {brewery.website_url
              ? <a href={brewery.website_url} target="_blank" rel="noreferrer">🌐 Visit Website</a>
              : <p>No website listed</p>
            }
          </div>
          <div className="detail-item">
            <h4>🏷️ Type</h4>
            <p>{brewery.brewery_type}</p>
          </div>
          <div className="detail-item">
            <h4>🗺️ Coordinates</h4>
            <p>Lat: {brewery.latitude || 'N/A'}</p>
            <p>Lng: {brewery.longitude || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreweryDetail