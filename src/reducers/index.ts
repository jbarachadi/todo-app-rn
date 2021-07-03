import { combineReducers } from "redux";

import { itemsReducer } from "./items";
import { inputReducer } from "./input";
import { editReducer } from "./edit";

export const allReducers = combineReducers({
    items: itemsReducer,
    text: inputReducer,
    edit: editReducer,
});
