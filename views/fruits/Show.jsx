const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { symbol, longName, purchasePrice, principalDate, fullExchangeName,regularMarketPrice,shares,_id } = this.props.fruit
    const capName = symbol[0].toUpperCase()
    return (
      <Default title={`${capName} Show Page`} fruit={this.props.fruit}>
        <p>{capName} aka {longName},  {fullExchangeName}</p>
        <p>Today {capName} is trading at {regularMarketPrice}. Your {shares}, of the {symbol} is worth {shares * regularMarketPrice}</p>
        <p>{principalDate} is currently {regularMarketPrice}, of the {purchasePrice} exchange</p>
        <p>{regularMarketPrice-purchasePrice <=0 ? 'down by per share ': 'up by'}</p>     d
      </Default>
    )
  }
}

module.exports = Show
