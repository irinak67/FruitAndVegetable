import React from "react";
import Product from "./Product";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalPrice: 0 };
  }

  OneProductSelected = (price, discount) => {
    let c = Number(this.state.totalPrice);
    (discount === 0) ? (c = c + price) : (c = c + price * 0.1);    
    this.setState({ totalPrice: c });
  };

  OneProductUnSelected = (price, discount) => {
    let c = Number(this.state.totalPrice);
    console.log(price, discount)
    (discount === 0) ? (c = c - price) : (c = c - price * 0.1);
    this.setState({ totalPrice: c });
  };

  render() {
    return (
      <h2>
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="rose hip"
          src="https://calorizator.ru/sites/default/files/imagecache/product_512/product/hips.jpg"
          price="20"
          discount="0"
        ></Product>
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="kiwi"
          src="https://calorizator.ru/sites/default/files/imagecache/product_512/product/kiwi.jpg"
          price="15"
          discount="0"
        ></Product>
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="red pepper"
          src="https://calorizator.ru/sites/default/files/imagecache/product_512/product/pepper-1.jpg"
          price="7"
          discount="0"
        ></Product>
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="green pepper"
          src="https://digitalcontent.api.tesco.com/v2/media/ghs/61ad2a29-f43e-407f-b49c-5d8a161143ab/snapshotimagehandler_308214006.jpeg?h=540&w=540"
          price="5"
          discount="10"
        ></Product>
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="potato"
          src="https://calorizator.ru/sites/default/files/imagecache/product_512/product/potato-1.jpg"
          price="9"
          discount="0"
        ></Product>
        {/* <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="guava"
          src="https://fruit-time.ua/images/cache/products/32/guayava-imp-500x500.webp"
          price="15"
          discount="0"
        ></Product> */}
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="blackcurrant"
          src="https://st.depositphotos.com/3147771/5140/i/950/depositphotos_51407515-stock-photo-black-currant.jpg"
          price="19"
          discount="0"
        ></Product>
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="green chilli"
          src="https://cdn.shopify.com/s/files/1/0051/4159/4210/products/green-chilli-100g-985675_1024x.jpg?v=1610886042"
          price="10.5"
          discount="10"
        ></Product>
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="parsley"
          src="https://cdnprod.mafretailproxy.com/sys-master-root/h8d/hc7/10955588042782/1207520_main.jpg_480Wx480H"
          price="3"
          discount="0" 
        ></Product>
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="broccoli"
          src="https://cdn.shopify.com/s/files/1/0602/3967/5579/products/Broccoli_02094eb1-d824-4970-a157-9f61459e3468.png?v=1632590568"
          price="10"
          discount="0"
        ></Product>
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="lemon"
          src="https://www.grolossal.com/image/cache/catalog/LNH%20Product%20picture/VegFruits/VF0068-LEMON-2-500x500.JPG"
          price="8"
          discount="10"
        ></Product>
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="persimmon"
          src="https://barthfruit.ch/custom/images/contentBilder/big/img_0678_kaki.jpg"
          price="12"
          discount="0"
        ></Product>
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="strawberry"
          src="https://fbi.org.il/wp-content/uploads/2019/05/strawberry.png"
          price="11"
          discount="0"
        ></Product>
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="orange"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg?20141112073556"
          price="9.2"
          discount="10"
        ></Product>
        <Product
          funcSelect={this.OneProductSelected}
          funcUnSelect={this.OneProductUnSelected}
          name="cabbege"
          src="https://dictionary.cambridge.org/fr/images/thumb/cabbag_noun_002_05130.jpg?version=5.0.222"
          price="4"
          discount="0"
        ></Product>
        <br />
        Total price: {this.state.totalPrice.toFixed(2)} ₪
      </h2>
    );
  }
}