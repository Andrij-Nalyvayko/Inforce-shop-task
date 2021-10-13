import React from 'react';
import { Product } from './types/product'

type State = Product;

type Props = {
  addProduct: any,
}

interface Event {
  target: { name: string; value: string }
}

class AddingProducts extends React.Component<Props, State> {
  state = {
    addingWindow: false,
    name: '',
    count: null,
    width: null,
    height: null,
    weight: null,
    comments: '',
  };

  clearForm = () => {
    this.setState({
      name: '',
      count: null,
      width: null,
      height: null,
      weight: null,
      comments: '',
    });
  };

  onChange = (event: Event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  sendAndClear = () => {
    // this.props.addProduct(this.state);
    console.log(this.props);
    
    this.clearForm();
  };

  render() {
    const {
      name,
      count,
      weight,
      width,
      height,
      comments,
      addingWindow,
    } = this.state;

    return (
      <>
        {!addingWindow && (<button
          type="button"
          onClick={() => this.setState({addingWindow: !addingWindow}) }
          className="button"
        >
          Add Product
        </button>)}

        {addingWindow && (<form
          method="post"
          onSubmit={event => {
            event.preventDefault();
            this.sendAndClear();
          }}
          className="form"
        >
          <p>Form to add new product</p>
          <input
            placeholder="Product name"
            onChange={this.onChange}
            value={name}
            name="name"
            type="text"
            className="input"
            required
          />
          <input
            placeholder="Count"
            onChange={this.onChange}
            value={count ? count : ''}
            name="count"
            type="number"
            className="input"
          />

          <input
            placeholder="Width"
            onChange={this.onChange}
            value={width ? width : ''}
            className="input"
            name="width"
            type="number"
            required
          />

          <input
            placeholder="Height"
            onChange={this.onChange}
            value={height ? height : ''}
            className="input"
            name="height"
            type="number"
            required
          />
          
          <input
            placeholder="Comments"
            onChange={this.onChange}
            className="input"
            value={comments}
            name="comments"
            type="text"
            required
          />
          <div className="buttons-container">
            <button
              type="submit"
              className="button"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={() => this.setState({addingWindow: !addingWindow}) }
              className="button button-close"
            >
              Cancel
            </button>
          </div>

        </form>)}
      </>
    )
  }
}

export default AddingProducts;
