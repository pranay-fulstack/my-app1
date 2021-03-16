import {wishReducer} from "./wish.reducer";
import {combineReducers} from "redux";

let rootReducer= combineReducers({WishMessage:wishReducer});
export {rootReducer};

