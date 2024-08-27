import React from 'react';

function Modal() {
  return (
    <div id="cartModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <div id="cartItems">
          {/* Render cart items dynamically */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
