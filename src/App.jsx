import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [breweries, setBreweries] = useState([])
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')

  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=50')
      const data = await response.json()
      setBreweries(data)
    }
    fetchBreweries()
  }, [])

  const filteredBreweries = breweries
    .filter(b => typeFilter === 'all' || b.brewery_type === typeFilter)
    .filter(b =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.city?.toLowerCase().includes(search.toLowerCase()) ||
      b.state?.toLowerCase().includes(search.toLowerCase())
    )

  const totalCount = breweries.length
  const uniqueStates = [...new Set(breweries.map(b => b.state))].filter(Boolean).length
  const microCount = breweries.filter(b => b.brewery_type === 'micro').length

  return (
    <div className="App">
      <div className="header">
        <h1>🍺 Brewery Dashboard</h1>
        <p>Explore breweries across the United States</p>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>{totalCount}</h3>
          <p>Total Breweries</p>
        </div>
        <div className="stat-card">
          <h3>{uniqueStates}</h3>
          <p>States Represented</p>
        </div>
        <div className="stat-card">
          <h3>{microCount}</h3>
          <p>Microbreweries</p>
        </div>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name, city, or state..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Types</option>
          <option value="micro">Micro</option>
          <option value="nano">Nano</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
          <option value="large">Large</option>
          <option value="planning">Planning</option>
          <option value="bar">Bar</option>
          <option value="contract">Contract</option>
          <option value="proprietor">Proprietor</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      <p className="results-count">Showing {filteredBreweries.length} results</p>

      <div className="brewery-list">
        <div className="list-header">
          <span>Name</span>
          <span>Type</span>
          <span>City</span>
          <span>State</span>
          <span>Website</span>
        </div>
        {filteredBreweries.map((brewery) => (
          <div key={brewery.id} className="brewery-row">
            <span>{brewery.name}</span>
            <span className={`type-badge ${brewery.brewery_type}`}>
              {brewery.brewery_type}
            </span>
            <span>{brewery.city || 'N/A'}</span>
            <span>{brewery.state || 'N/A'}</span>
            <span>
              {brewery.website_url
                ? <a href={brewery.website_url} target="_blank" rel="noreferrer">Visit</a>
                : 'N/A'
              }
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App