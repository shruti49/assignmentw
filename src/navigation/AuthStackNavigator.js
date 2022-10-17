import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";

const AuthStackNavigator = () => {
	const AuthStack = createNativeStackNavigator();
	return (
		<AuthStack.Navigator
			headerMode="none"
			screenOptions={{
				gestureEnabled: true,
				gestureDirection: "horizontal",
				headerShown: false,
			}}
			initialRouteName="login"
		>
			<AuthStack.Screen name="login" component={LoginScreen} />
			<AuthStack.Screen name="register" component={RegistrationScreen} />
		</AuthStack.Navigator>
	);
};

export default AuthStackNavigator;
