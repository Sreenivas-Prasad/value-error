import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {displayValue: countryAndCapitalsList[0]}

  displayCountry = event => {
    const filteredList = countryAndCapitalsList.filter(each1 =>
      each1.id.toLowerCase().includes(event.target.value.toLowerCase()),
    )
    this.setState({displayValue: filteredList[0]})
  }

  render() {
    const {displayValue} = this.state
    const {id, capitalDisplayText, country} = displayValue
    return (
      <div className="capital-bg">
        <div className="card">
          <h1 className="heading">Govinda Countries and Capitals </h1>
          <div className="two-one">
            <select
              className="select"
              value={displayValue.id}
              onChange={this.displayCountry}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}{' '}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="para2">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
