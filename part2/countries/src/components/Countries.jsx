const Countries = ({ countries, setCountries }) => {
  if (countries === null) {
    return <div>No countries found that match the filter</div>
  } else if (countries.length === 0) {
    return <div>Too many matches. Please specify in the filter</div>
  } else if (countries.length === 1) {
    return (
      <div>
        <h1>{countries[0].name.common}</h1>
        <div>
          Capital {countries[0].capital[0]}<br />
          Area {countries[0].area}
        </div>
        <h2>Languages</h2>
        <ul>
          {Object.entries(countries[0].languages).map(([key, language]) =>
            <li key={key}>{language}</li>
          )}
        </ul>
        <div>
          <img src={countries[0].flags.png} alt={countries[0].flags.alt}></img>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        {countries.map(country => <div key={country.name.common}>{country.name.common} <button onClick={() => setCountries([country])}>Show</button></div>)}
      </div>
    )
  }
}

export default Countries
