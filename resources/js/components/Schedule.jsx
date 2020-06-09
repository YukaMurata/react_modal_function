import React, { useState, useEffect } from 'react';

import Template from '../modules/Aux';
import { Name } from './Name';
import { Modal } from './Modal';

const renderName = (status, handleModalFlag) => {
  return <Name status={status} parentMethod={handleModalFlag} />;
};

export const Schedule = (list) => {
  const [state, setState] = useState({ isModalOpen: false, selectedIndex: 'ばなな' });
  const handleModalFlag = (selected) => {
    setState({ isModalOpen: !state.isModalOpen, selectedIndex: selected });
  };

  const data = list;
  if (!data) {
    return <p>まだ</p>;
  } else {
    return (
      <div>
        <div className="place-info">
          <ul className="place-list">{data && Object.keys(data).map((item, index) => <Template key={index}>{!data[item].isRegistered ? renderName(data[item].serviceType, handleModalFlag) : ''}</Template>)}</ul>
        </div>
        {state.isModalOpen ? <Modal parentMethod={handleModalFlag} selectedIndex={state.selectedIndex} /> : ''}
      </div>
    );
  }
};
