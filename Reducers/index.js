import { combineReducers } from "redux";
import CounterMen from "./CounterMen";
import CounterWomen from "./CounterWomen";
import CounterKids from "./CounterKids";
import CounterOther from "./CounterOthers";
import GetPrestaId from "./getPrestaId";
import PrestaReducer from "./prestaReducer";
import GetServiceId from "./getServiceId";

export default combineReducers({
    servId: GetServiceId,
    getId: GetPrestaId,
    reducerPresta: PrestaReducer,
    counter_3: CounterKids,
    counter_4: CounterOther,
    counter_2:CounterWomen,
    counter_1: CounterMen,
})