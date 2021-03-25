import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import ekran1 from "./ekran1";
import ekran2 from "./ekran2";
import ekran3 from "./ekran3";
import ekran4 from "./ekran4";
import ekran5 from "./ekran5";
const { createNavigator } = Platform.select({
 ios: { createNavigator: createBottomTabNavigator },
 android: { createNavigator: createDrawerNavigator }
});
export default createAppContainer(
 createNavigator({ ekran1, ekran2, ekran3, ekran4, ekran5 }, { initialRouteName: "ekran5" })
);
