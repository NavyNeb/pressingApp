import Assigned from "../Components/pressing/assigned";
import Completed from "../Components/pressing/completed";
import ReviewOrder from "../Components/pressing/reviewOrder";

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const pressing = createMaterialTopTabNavigator()
export default function StackPresing(params) {
    return (
        <pressing.Navigator>
            <pressing.Screen name = 'Assigned' component={Assigned} />
            <pressing.Screen name = 'Completed' component={ Completed } />
        </pressing.Navigator>
    )
}