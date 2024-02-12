import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          n ecommerce business uses digital methods to sell products and
          services to customers. Ecommerce businesses can be online-only or have
          a physical presence as well. Selling to customers online typically
          requires a website or digital storefront, plus a way to process
          payments digitally and ship orders to customers.E-commerce (electronic
          commerce) is the buying and selling of goods and services, or the
          transmitting of funds or data, over an electronic network, primarily
          the internet.
        </p>
        <p>
          It can seem overwhelming to take that first step, but it doesn't have
          to be. Start by working out the basics of your e-commerce business
          plan, like what you'll be selling online and how to sell it.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
