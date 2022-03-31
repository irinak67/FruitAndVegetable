import React from "react";

export default class Product extends React.Component {
  render() {
    return (
      <div className="App">
        <table>
        <tbody>
          <tr>
            <td>
              <h2>{this.props.name}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <img src={this.props.src} alt={this.props.name} height="200" />
            </td>
          </tr>
          <tr>
            <td>
              <h5>Price: {this.props.price} ₪, Discount: {this.props.discount} %</h5>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                onChange={(ev) => {
                  if (ev.target.checked === true) {
                    this.props.funcSelect(Number(this.props.price),Number(this.props.discount));
                  } else {
                    this.props.funcUnSelect(Number(this.props.price),Number(this.props.discount));
                  }
                }}
              />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
