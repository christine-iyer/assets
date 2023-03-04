const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { fruits } = this.props
    return (
      <Default title='Fruits Index Page'>
        <ul>
          {
                        fruits.map((fruit) => {
                          const { symbol, longName, purchasePrice, principalDate, fullExchangeName,regularMarketPrice,_id } = fruit
                          return (
                            <li key={_id}>
                              <a href={`/fruits/${_id}`}>
                                {symbol}, {longName}
                              </a> is {regularMarketPrice} today versus what you paid, {purchasePrice}, on {principalDate}

                              <br />
                              {fullExchangeName} 
                              <br />
                              <form method='POST' action={`/fruits/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${symbol} at ${regularMarketPrice} today, versus ${purchasePrice} that you paid on ${principalDate}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index
