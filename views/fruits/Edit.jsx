const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { symbol, shares,longName, purchasePrice, principalDate, fullExchangeName,regularMarketPrice,_id } = this.props.fruit
    return (
      <Default title={`${symbol} Edit Page`} fruit={this.props.fruit}>
        <form method='POST' action={`/fruits/${_id}?_method=PUT`}>
          Symbol: <input type='text' name='symbol' defaultValue={symbol} /><br />
          Date: <input type='date' name='principalDate' defaultValue={principalDate} /><br />
          Number of Shares: <input type='numeric' name='shares' defaultChecked={shares} /> <br />
          Price per Share: <input type='numeric' name='purchasePrice' defaultChecked={purchasePrice} /> <br />
          <input type='submit' value='Edit Fruit' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
