// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    isZero: 'heads',
  }

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        isZero: 'heads',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        isZero: 'tails',
      }))
    }
  }

  render() {
    const {total, heads, tails, isZero} = this.state
    return (
      <div className="app-container">
        <div className="game-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img
            src={`https://assets.ccbp.in/frontend/react-js/${isZero}-img.png`}
            className="coin-image"
            alt="toss result"
          />
          <button
            type="button"
            className="toss-coin-button"
            onClick={this.onClickButton}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-container-text">Total: {total}</p>
            <p className="count-container-text">Heads: {heads}</p>
            <p className="count-container-text">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
