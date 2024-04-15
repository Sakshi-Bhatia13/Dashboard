import React from 'react';

const FirstRow = () => {
  return (
    <div className="firstrow">
      <div className="cards-container">
        <div className="mycards">
          <h4>My Cards</h4>
          <div className="cardsSection">
            <div className="card">
              <p>Balance</p>
              <p>$5756</p>
              <div className="midcard">
                <div className="entries">
                  <p>CARD HOLDER</p>
                  <p>Eddy Cusuma</p>
                </div>
                <div className="entries">
                  <p>VALID THRU</p>
                  <p>12/22</p>
                </div>
              </div>
              <div className="cardnum">
                <p>3778********1234</p>
              </div>
            </div>
            <div className="card">
              <p>Balance</p>
              <p>$5756</p>
              <div className="midcard">
                <div className="entries">
                  <p>CARD HOLDER</p>
                  <p>Eddy Cusuma</p>
                </div>
                <div className="entries">
                  <p>VALID THRU</p>
                  <p>12/22</p>
                </div>
              </div>
              <div className="cardnum">
                <p>3778********1234</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-transaction">
        <div className="heading">
          <h3>Recent Transaction</h3>
        </div>
        <div className="transaction-list">
          <div className="t1">
            <div className="details">
              <p>Deposit from my card</p>
              <p>28-Jan-2021</p>
            </div>
            <div className="amount">+101$</div>
          </div>
          <div className="t1">
            <div className="details">
              <p>Deposit from my card</p>
              <p>28-Jan-2021</p>
            </div>
            <div className="amount">+101$</div>
          </div>
          <div className="t1">
            <div className="details">
              <p>Deposit from my card</p>
              <p>28-Jan-2021</p>
            </div>
            <div className="amount">+101$</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstRow;
