import * as React from 'react';
import {render} from "react-dom";
import {init} from '@rematch/core';
import * as models from './models';
import {Provider} from "react-redux";
import View from './view';

/** Store init. */
const store = init({
    models,
});


render(<Provider store={store}>
    <View/>
</Provider>, document.getElementById('app'));