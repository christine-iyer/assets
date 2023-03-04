require('dotenv').config()

const db = require('./db')
const Fruit = require('./fruit')

const starterFruits = [
  [
    { symbol: "GOOGL", purchasePrice: 143.49, shares: 100, principalDate: '12/22/2021' },
    { symbol: "TSLA", purchasePrice: 242.54, shares: 45, principalDate: '11/27/2020' },
    { symbol: "AMZN", purchasePrice: 160.00, shares: 80, principalDate: '11/27/2020' },
    { symbol: "BA", purchasePrice: 188.59, shares: 25, principalDate: '12/14/2022' },
    { symbol: "COIN", purchasePrice: 257.31, shares: 50, principalDate: '12/28/2021' },
    { symbol: "AAPL", purchasePrice: 114.56, shares: 200, principalDate: ' 11/23/2020' },
    { symbol: "CVS", purchasePrice: 89.83, shares: 25, principalDate: '1/11/2023' },
    { symbol: "GS", purchasePrice: 342.94, shares: 10, principalDate: '1/24/2022' },
    { symbol: "MS", purchasePrice: 98.39, shares: 25, principalDate: '12/22/2021' },
    { symbol: "NVDA", purchasePrice: 293.75, shares: 5, principalDate: '12/22/2021' },
    { symbol: "PYPL", purchasePrice: 191.57, shares: 10, principalDate: '12/22/2021' },
    { symbol: "PFE", purchasePrice: 47.45, shares: 100, principalDate: '11/10/2022' },
    { symbol: "CRM", purchasePrice: 160.38, shares: 20, principalDate: '10/21/2022' },
    { symbol: "SBUX", purchasePrice: 102.99, shares: 25, principalDate: '12/14/2022' },
    { symbol: "DIS", purchasePrice: 151.93, shares: 10, principalDate: '12/22/2021' },
    { symbol: "VTI", purchasePrice: 239.05, shares: 10, principalDate: '12/22/2021', },
    { symbol: "LI", purchasePrice: 32.53, shares: 225, principalDate: '11/13/2020' }
  
  ]
]


Fruit.deleteMany({})
    .then(() => {
      Fruit.create(starterFruits)
        .then((createdFruits) => {
            console.log('created fruits:', createdFruits)
            db.close()
        })
        .catch(err => {
            console.log(err)
            db.close()
        })  
    }).catch(err => {
        console.log(err)
        db.close()
    })