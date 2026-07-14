import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'
import BreweryDetail from './BreweryDetail'
import './App.css'

const COLORS = ['#b45309', '#d97706', '#f59e0b', '#fbbf24', '#fcd34d', '#fde68a', '#78716c', '#a8a29e', '#57534e', '#44403c']

const Dashboard = ({ breweries }) => {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')

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

  const typeData = Object.entries(
    breweries.reduce((acc, b) => {
      acc[b.brewery_type] = (acc[b.brewery_type] || 0) + 1
      return acc
    }, {})
  ).map(([name, value]) => ({ name, value }))

  const stateData = Object.entries(
    breweries.reduce((acc, b) => {
      if (b.state) acc[b.state] = (acc[b.state] || 0) + 1
      return acc
    }, {})
  )
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8)

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

      <div className="charts">
        <div className="chart-card">
          <h3>Breweries by Type</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={typeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, value }) => `${name}: ${value}`}
              >
                {typeData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Top 8 States by Brewery Count</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={stateData}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#b45309" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
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
          <Link to={`/brewery/${brewery.id}`} key={brewery.id} className="brewery-row">
            <span>{brewery.name}</span>
            <span className={`type-badge ${brewery.brewery_type}`}>
              {brewery.brewery_type}
            </span>
            <span>{brewery.city || 'N/A'}</span>
            <span>{brewery.state || 'N/A'}</span>
            <span>
              {brewery.website_url
                ? <span className="visit-link">Visit</span>
                : 'N/A'
              }
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

const App = () => {
  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=50')
      const data = await response.json()
      setBreweries(data)
    }
    fetchBreweries()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard breweries={breweries} />} />
        <Route path="/brewery/:id" element={<BreweryDetail breweries={breweries} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App