import React from 'react';

const QuickTransfer = () => {
  return (
    <div className="quick-transfer">
      <div className="person">
        <div className="person-details">
          <img src="person1.jpg" alt="Person 1" />
          <h4>John Doe</h4>
          <p>Position</p>
        </div>
        <div className="person-details">
          <img src="person2.jpg" alt="Person 2" />
          <h4>Jane Doe</h4>
          <p>Position</p>
        </div>
        <div className="person-details">
          <img src="person3.jpg" alt="Person 3" />
          <h4>David Smith</h4>
          <p>Position</p>
        </div>
      </div>
      <div className="transfer-buttons">
        <button>Write Amount</button>
        <button>Send</button>
      </div>
    </div>
  );
};

export default QuickTransfer;
