const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render() {
    return (
      <Default title='Create A New Fruit'>
        <form method='POST' action='/fruits'>
          Symbol: <input type='text' name='symbol' placeholder='Name of Asset' /><br />
          Date: <input type='date' name='principalDate' placeholder='Date of Purchase' /><br />
          Number of Shares: <input type='numeric' name='shares' placeholder='5' /><br />
          Price per Share: <input type='numeric' name='purchasePrice' /><br />
          <input type='submit' value='Submit Fruit' />
        </form>
      </Default>
    )
  }
}

module.exports = New
