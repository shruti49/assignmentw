import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeTabNavigator from "./HomeTabNavigator";

const AppStackNavigator = () => {
	const AppStack = createNativeStackNavigator();
	return (
		<AppStack.Navigator
			headerMode="none"
			screenOptions={{
				gestureEnabled: true,
				gestureDirection: "horizontal",
				headerShown: false,
			}}
			initialRouteName="home"
		>
			<AppStack.Screen name="home" component={HomeTabNavigator} />
		</AppStack.Navigator>
	);
};

export default AppStackNavigator;
