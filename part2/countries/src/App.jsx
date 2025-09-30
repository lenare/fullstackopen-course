import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import countryService from './services/countries'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then(allCountries => {
        const filteredCountries = allCountries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
        if (filteredCountries.length > 10) {
          setCountries([])
        } else if (filteredCountries.length === 0) {
          setCountries(null)
        } else {
          setCountries(filteredCountries)
        }
      }
      )
  }, [filter])

  return (
    <div>
      <h2>Countries</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <Countries countries={countries} setCountries={setCountries} />
    </div>
  )
}

export default App
