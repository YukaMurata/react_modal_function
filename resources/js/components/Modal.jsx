import React from 'react';

export const Modal = (props) => {
  return (
    <div className="modal">
      <p className="cancel" onClick={props.parentMethod}>
        ×
      </p>
      <div className="modal__wrapper">
        <p>{props.selectedIndex}</p>
      </div>
    </div>
  );
};
