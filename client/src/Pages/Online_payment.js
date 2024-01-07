import React from "react";
import "../Css/Online_payment.css";
import { Link } from "react-router-dom";
const Online_payment = () => {
  return (
    <div>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: "navy" }} />
                    <i className="fa fa-cc-amex" style={{ color: "blue" }} />
                    <i
                      className="fa fa-cc-mastercard"
                      style={{ color: "red" }}
                    />
                    <i
                      className="fa fa-cc-discover"
                      style={{ color: "orange" }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="cname">Name on Card</label>
                      <input
                        type="text"
                        id="cname"
                        name="cardname"
                        placeholder="John More Doe"
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="ccnum">Credit card number</label>
                      <input
                        type="text"
                        id="ccnum"
                        name="cardnumber"
                        placeholder="1111-2222-3333-4444"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder={2018}
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Month</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder={2018}
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder={352}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  name="sameadr"
                />{" "}
                Shipping address same as billing
              </label>
              <Link to="/order-success" refresh="true">
                <button className="place_order">Place Order</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Online_payment;
