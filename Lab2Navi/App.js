import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import spread_operator from "./spread_operator";
import rest_parameters from "./rest_parameters";
import useState from "./useState";
const { createNavigator } = Platform.select({
 ios: { createNavigator: createBottomTabNavigator },
 android: { createNavigator: createBottomTabNavigator }
});
export default createAppContainer(
 createNavigator({ spread_operator, rest_parameters, useState }, { initialRouteName: "spread_operator" })
);
