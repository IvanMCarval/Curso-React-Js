import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './Modules/rootReducer';

const store = configureStore({reducer: rootReducer});

export default store;