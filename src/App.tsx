import React from 'react';
import AddingProducts from './AddingProducts';
import { BASE_URL } from './api/api';
import './styles/styles.scss';
import { Table } from './Table'
import { Product } from './types/product'

type State = {
  products: Product,
};

class App extends React.Component<State> {
  state = {
    products: [1,2],
  };

  downloadData = () => {
    return fetch(`${BASE_URL}?userId=333444121`)
      .then(info => info)
  }
  

  addProduct = (products: Product) => {
    return fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        userId: "inforce-shop",
        products,
      }),
    })
      .then((response: { json: () => any; }) => response.json())
  }


  render() {

    this.downloadData()

    return (
      <div className="shop">
      <Table />
      <AddingProducts addProduct={this.addProduct}/>

      </div>
    )
  };
}

export default App;
