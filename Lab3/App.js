import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import Ekran1 from "./ListContainer"
import useState from "./useState";
import Ekran2 from "./ListContainerLazy";
import Ekran3 from "./ekran3";
const { createNavigator } = Platform.select({
 ios: { createNavigator: createBottomTabNavigator },
 android: { createNavigator: createDrawerNavigator }
});
export default createAppContainer(
 createNavigator({ Ekran1,Ekran2,Ekran3 }, { initialRouteName: "Ekran1" })
);
