import React from "react";
import { Navigator } from "navigations";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "reducers";

const store = createStore(allReducers);

export default () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
);
