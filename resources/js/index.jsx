import React from 'react';
import ReactDOM from 'react-dom';

import { Top } from './components/Top';

//表示する親
const $app = document.querySelector('#app');

//DOMをレンダリング
ReactDOM.render(<Top />, $app);
