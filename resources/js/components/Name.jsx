import React from 'react';

import { category } from '../modules/helper';

export const Name = (props) => {
  return (
    <li
      className="hide js-accordion-wrapper"
      onClick={() => {
        props.parentMethod(category[props.status]);
      }}
    >
      <p className="content">
        <span className="content-inr">{category[props.status]}</span>
      </p>
    </li>
  );
};
