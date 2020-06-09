import React, { useState, useEffect } from 'react';

import { getServers } from '../modules/request';
import { Schedule } from './Schedule';

export const Top = () => {
  const [state, setState] = useState({ list: '' });
  const addresses = ['./json/schedule.json'];
  getServers(addresses).then((allResponse) => {
    const listData = allResponse.res[0].list;
    setState({ list: listData });
  });
  return (
    <div>
      <ul className="place-list">{Schedule(state.list)}</ul>
    </div>
  );
};
