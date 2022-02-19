import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './style.css'


export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState();
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    fetch('https://corona-api.com/countries')
      .then(response => response.json())
      .then(result => setCountries(result.data))
  }, [])
  useEffect(() => {
    const timerId = setTimeout(() => {
      setFilteredCountries(countries.filter(item => item.name.includes(filter)))
    }, 500);

    return () => {
      clearTimeout(timerId)
    }
  }, [filter])
  return (
    <div>
      <div>
        <input 
          type='text'
          onChange={e => setFilter(e.target.value)}
          placeholder='Input country name'
        />
      </div>
      <div>
        {
          filteredCountries.map((item, index) => {
            return (
              <Link key={index} to={item.code}>
                <div className="countries-item">
                  <p>{item.name}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}