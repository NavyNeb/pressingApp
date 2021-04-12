import { combineReducers } from "redux";
import CounterMen from "./CounterMen";
import CounterWomen from "./CounterWomen";
import CounterKids from "./CounterKids";
import CounterOther from "./CounterOthers";
import GetPrestaId from "./getPrestaId";
import PrestaReducer from "./prestaReducer";
import GetServiceId from "./getServiceId";
import GetPickAddress from './address';
import GetDeliveryAddress  from "./deliveryAddress";
import Commande from "./commande";
import reqOrder from "./reqOrders";
import DeliveryId from "./deliveryAddessId";
import PickId from "./pickAddressId"

export default combineReducers({
    pikId: PickId,
    devId: DeliveryId,
    Order: reqOrder,
    commande: Commande,
    deliveryAddress: GetDeliveryAddress,
    pickAddress: GetPickAddress,
    servId: GetServiceId,
    getId: GetPrestaId,
    reducerPresta: PrestaReducer,
    counter_3: CounterKids,
    counter_4: CounterOther,
    counter_2:CounterWomen,
    counter_1: CounterMen,
})