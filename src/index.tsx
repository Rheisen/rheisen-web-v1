import React from 'react';
import ReactDOM from 'react-dom';

import { AppRoutes } from './AppRoutes';
import * as serviceWorker from './serviceWorker';

import 'styles/base.scss';

ReactDOM.render(<AppRoutes />, document.getElementById('root'));

serviceWorker.register();
