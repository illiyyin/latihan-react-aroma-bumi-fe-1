import React from "react";
import "./product.css";
import "./product-media.css";
import "./product-keyframe.css";

export default function Product() {
  return (
    // <link rel="stylesheet" href="../../assets/css/main.css">
    // <link rel="stylesheet" href="../../assets/css/pages-css/products.css">
    // <link rel="stylesheet" href="../../assets/css/media-queries/products-media.css">
    // <link rel="stylesheet" href="../../assets/css/font-weight.css">
    <>
      <main>
        <section className="content">
          <div className="title">
            <h2>Our Coffee Based Products</h2>
            <p>Locally sourced best ingredients = best coffee</p>
          </div>
          <div className="product-container">
            <div className="product">
              <h4>Aren Latte</h4>
              <p>Rp. 18.000,-</p>
              <img src="../../assets/images/aren latte.png" alt="Aren Latte" />
            </div>
            <div className="product">
              <h4>Cafe Latte</h4>
              <p>Rp. 24.000,-</p>
              <img src="../../assets/images/cafe latte.png" alt="Cafe Latte" />
            </div>
            <div className="product">
              <h4>Caramel Latte</h4>
              <p>Rp. 30.000,-</p>
              <img
                src="../../assets/images/caramel latte.png"
                alt="Caramel Latte"
              />
            </div>
            <div className="product">
              <h4>Americano</h4>
              <p>Rp. 18.000,-</p>
              <img src="../../assets/images/americano.png" alt="Americano" />
            </div>
            <div className="product">
              <h4>Cappucino</h4>
              <p>Rp. 24.000,-</p>
              <img src="../../assets/images/cappucino.png" alt="Cappucino" />
            </div>
            <div
              className="product"
              //   onClick="location.href='product-butterscotch.html';"
              //   style="cursor: pointer;"
            >
              <h4>Butterscotch</h4>
              <p>Rp. 24.000,-</p>
              <img
                src="../../assets/images/butterscotch.png"
                alt="Butterscotch"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
