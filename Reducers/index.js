import { combineReducers } from "redux";
import CounterMen from "./CounterMen";
import CounterWomen from "./CounterWomen";
import CounterKids from "./CounterKids";
import CounterOther from "./CounterOthers";

export default combineReducers({
    counter_4: CounterOther,
    counter_3: CounterKids,
    counter_2:CounterWomen,
    counter_1: CounterMen,
})