import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './style.css'

export default function CountriesInfoItem() {
  const {code} = useParams()
  const [countryInfo, setCountryInfo] = useState([]);
  useEffect(() => {
    fetch('https://corona-api.com/countries/' + code)
      .then(response => response.json())
      .then(result => setCountryInfo([result]))
  }, [code])

  
  return (
    <div className="countries-info__item">
      {
        countryInfo.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.data.name}</h3>
              <p>Population: {item.data.population}</p>
              <span>Deaths: {item.data.latest_data.deaths}</span><br />
              <span>Confirmed: {item.data.latest_data.confirmed}</span>
            </div>
          )
        })
      }
    </div>
  )
}